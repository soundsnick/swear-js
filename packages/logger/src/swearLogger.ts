import { SwearPatch } from '@swear-js/core';
import { ISwearLogger } from './types';

export const swearLogger = (logger: ISwearLogger = console) => ({
  swearId, actionType, prev, payload, next,
}: SwearPatch) => {
  const now = new Date(Date.now());
  logger.group(`🥪🧀 \x1B[33m${swearId}.${actionType}`, `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
  logger.log('\x1B[34mprev:', prev);
  logger.log('\u001b[1;35mpayload:', payload);
  logger.log('\x1B[32mnext:', next);
  logger.groupEnd();
};
