import { SwearPatch } from '@swear-js/core';

export const swearLogger = ({
  swearId, actionType, prev, payload, next,
}: SwearPatch) => {
  const now = new Date(Date.now());
  console.group(`🥪🧀 \x1B[33m${swearId}.${actionType}`, `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
  console.log('\x1B[34mprev:', prev);
  console.log('\u001b[1;35mpayload:', payload);
  console.log('\x1B[32mnext:', next);
  console.groupEnd();
};
