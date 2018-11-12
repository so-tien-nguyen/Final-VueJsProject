import * as CounterModule from "./index"

export const doubleCounter = function doubleCounter(state: CounterModule.CounterState): number {
    return state.counter.counter * 2;
};