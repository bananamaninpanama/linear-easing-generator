import { Signal } from '@preact/signals';
import { State } from './types';
export declare function doAbortable<R>(signal: AbortSignal, callback: (setAbortAction: (abortAction: () => void) => void) => R | Promise<R>): Promise<R>;
export declare function logSignalUpdates(signals: {
    [name: string]: Signal<any>;
}): void;
export declare function getURLParamsFromState(state: Partial<State>): URLSearchParams;
export declare function useElementSize(): [
    refCallback: (el: Element | null) => void,
    sizeSignal: Signal<{
        width: number;
        height: number;
    } | null>
];
export declare function useMatchMedia(query: string): Signal<boolean>;
export declare function animateTo(element: HTMLElement, to: Keyframe[] | PropertyIndexedKeyframes, options: KeyframeAnimationOptions): Animation;
export declare function animateFrom(element: HTMLElement, from: PropertyIndexedKeyframes, options: KeyframeAnimationOptions): Animation;
export declare const hideFromPrerender: string;
//# sourceMappingURL=utils.d.ts.map