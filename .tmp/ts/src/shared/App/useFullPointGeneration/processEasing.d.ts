import type { PostMessageError, ProcessResult } from 'shared-types/index';
import { CodeType } from '../types';
export declare class ProcessScriptEasingError extends Error {
    fileName?: string;
    lineNumber?: number;
    columnNumber?: number;
    functionName?: string;
    constructor(postMessageError: PostMessageError);
}
export default function processEasing(signal: AbortSignal, script: string, type: CodeType): Promise<ProcessResult>;
//# sourceMappingURL=processEasing.d.ts.map