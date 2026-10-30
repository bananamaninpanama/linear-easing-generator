import { useComputed, useSignalEffect } from '@preact/signals';
import { h } from 'preact';
import 'add-css:./styles.module.css';
import * as styles from './styles.module.css';
import { useEffect, useRef } from 'preact/hooks';
const linearSupported = __PRERENDER__
    ? true
    : CSS.supports('animation-timing-function', 'linear(0, 1)');
const gap = 500;
const anim = (el, easing, duration, keyframes) => el.animate(keyframes, {
    fill: 'forwards',
    duration,
    easing: easing || 'linear',
});
const useLinearValue = (linear) => useComputed(() => linear.value.length === 0 ? '' : `linear(${linear.value.join()})`);
const Demos = ({ slightlyOptimizedLinear, linear, duration, play, }) => {
    const slightlyOptimizedLinearStr = useLinearValue(slightlyOptimizedLinear);
    const linearStr = useLinearValue(linear);
    const computedPlayState = useComputed(() => Boolean(play.value && slightlyOptimizedLinearStr.value && linearStr.value));
    const demos = useRef(null);
    const slightlyOptimizedTranslateEl = useRef(null);
    const translateEl = useRef(null);
    // Initial setup
    useEffect(() => {
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
            if (!linearSupported)
                return;
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
    useSignalEffect(() => {
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
    useSignalEffect(() => {
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
    useSignalEffect(() => {
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
    return (h("div", { ref: demos, class: styles.demos },
        h("div", { class: styles.translate },
            h("div", { ref: slightlyOptimizedTranslateEl },
                h("div", { class: [styles.demoBox, styles.unoptimizedDemoBox].join(' ') }, "Input")),
            h("div", { ref: translateEl },
                h("div", { class: styles.demoBox }, "Output"))),
        !linearSupported && (h("div", { class: styles.unsupportedMessage },
            h("div", null,
                "linear() not supported by this browser.",
                ' ',
                h("a", { href: "https://caniuse.com/mdn-css_types_easing-function_linear-function", target: "_blank" }, "See browser support."))))));
};
export { Demos as default };
