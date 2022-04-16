import { SwearPatch } from '@swear-js/core';
import { ISwearLogger } from './types';
export declare const swearLogger: (logger?: ISwearLogger) => ({ swearId, actionType, prev, payload, next, }: SwearPatch) => void;
