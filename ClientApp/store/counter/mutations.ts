import * as CounterModule from "./index"

export const increment = function increment(state: CounterModule.CounterState, payload: number) {
    state.counter.counter += payload;
}