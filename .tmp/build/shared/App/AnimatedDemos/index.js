'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var signals = require('@preact/signals');
var preact = require('preact');
var styles_module = require('./styles.module.css.js');
var hooks = require('preact/hooks');

const linearSupported = true
    ;
const gap = 500;
const anim = (el, easing, duration, keyframes) => el.animate(keyframes, {
    fill: 'forwards',
    duration,
    easing: easing || 'linear',
});
const useLinearValue = (linear) => signals.useComputed(() => linear.value.length === 0 ? '' : `linear(${linear.value.join()})`);
const Demos = ({ slightlyOptimizedLinear, linear, duration, play, }) => {
    const slightlyOptimizedLinearStr = useLinearValue(slightlyOptimizedLinear);
    const linearStr = useLinearValue(linear);
    const computedPlayState = signals.useComputed(() => Boolean(play.value && slightlyOptimizedLinearStr.value && linearStr.value));
    const demos = hooks.useRef(null);
    const slightlyOptimizedTranslateEl = hooks.useRef(null);
    const translateEl = hooks.useRef(null);
    // Initial setup
    hooks.useEffect(() => {
        let stop = false;
        // Watch for the media change, as the animation direction changes
        const horizonalAnimMedia = matchMedia('(min-width: 1820px), (max-width: 1159px)');
        let currentMediaListener = null;
        const mediaListener = () => currentMediaListener?.();
        horizonalAnimMedia.addEventListener('change', mediaListener);
        const getAxis = () => (horizonalAnimMedia.matches ? 'X' : 'Y');
        const getOutKeyframes = () => [
            `translate${getAxis()}(0)`,
            `translate${getAxis()}(100%)`,
        ];
        const getInKeyframes = () => [
            `translate${getAxis()}(100%)`,
            `translate${getAxis()}(0)`,
        ];
        (async () => {
            while (!stop) {
                const outAnims = [
                    anim(slightlyOptimizedTranslateEl.current, slightlyOptimizedLinearStr.value, duration.value, {
                        transform: getOutKeyframes(),
                    }),
                    anim(translateEl.current, linearStr.value, duration.value, {
                        transform: getOutKeyframes(),
                    }),
                ];
                // Switch the keyframes if the media query changes
                currentMediaListener = () => {
                    for (const anim of outAnims) {
                        anim.effect.setKeyframes({
                            transform: getOutKeyframes(),
                        });
                    }
                };
                await Promise.all(outAnims.map((a) => a.finished));
                await slightlyOptimizedTranslateEl.current.animate(null, gap).finished;
                if (stop)
                    break;
                const inAnims = [
                    anim(slightlyOptimizedTranslateEl.current, slightlyOptimizedLinearStr.value, duration.value, {
                        transform: getInKeyframes(),
                    }),
                    anim(translateEl.current, linearStr.value, duration.value, {
                        transform: getInKeyframes(),
                    }),
                ];
                // Switch the keyframes if the media query changes
                currentMediaListener = () => {
                    for (const anim of outAnims) {
                        anim.effect.setKeyframes({
                            transform: getInKeyframes(),
                        });
                    }
                };
                await Promise.all(inAnims.map((a) => a.finished));
                await slightlyOptimizedTranslateEl.current.animate(null, gap).finished;
            }
        })();
        return () => {
            stop = true;
            horizonalAnimMedia.removeEventListener('change', mediaListener);
        };
    }, []);
    // Updates to easing
    signals.useSignalEffect(() => {
        if (slightlyOptimizedLinearStr.value === '' ||
            linearStr.value === '' ||
            !linearSupported) {
            return;
        }
        const slightly = [slightlyOptimizedTranslateEl.current].flatMap((el) => el.getAnimations());
        const optim = [translateEl.current].flatMap((el) => el.getAnimations());
        for (const anim of slightly) {
            anim.effect.updateTiming({ easing: slightlyOptimizedLinearStr.value });
        }
        for (const anim of optim) {
            anim.effect.updateTiming({ easing: linearStr.value });
        }
    });
    // Updates to duration
    signals.useSignalEffect(() => {
        if (slightlyOptimizedLinearStr.value === '' ||
            linearStr.value === '' ||
            !linearSupported) {
            return;
        }
        const anims = [
            slightlyOptimizedTranslateEl.current,
            translateEl.current,
        ].flatMap((el) => el.getAnimations());
        for (const anim of anims) {
            anim.effect.updateTiming({ duration: duration.value });
        }
    });
    // Changes to play state
    signals.useSignalEffect(() => {
        const anims = [
            slightlyOptimizedTranslateEl.current,
            translateEl.current,
        ].flatMap((el) => el.getAnimations());
        for (const anim of anims) {
            if (anim.playState === 'finished')
                continue;
            if (computedPlayState.value) {
                anim.play();
            }
            else {
                anim.pause();
            }
        }
    });
    return (preact.h("div", { ref: demos, class: styles_module.demos },
        preact.h("div", { class: styles_module.translate },
            preact.h("div", { ref: slightlyOptimizedTranslateEl },
                preact.h("div", { class: [styles_module.demoBox, styles_module.unoptimizedDemoBox].join(' ') }, "Input")),
            preact.h("div", { ref: translateEl },
                preact.h("div", { class: styles_module.demoBox }, "Output"))),
        !linearSupported ));
};

exports.default = Demos;
