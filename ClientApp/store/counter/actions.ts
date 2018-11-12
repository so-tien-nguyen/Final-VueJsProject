import * as CounterModule from "./index"
import { BareActionContext } from "vuex-typex";
import { RootState } from "../rootstate";
import { mutations } from "./counter";

export const increment = function increment(context: BareActionContext<CounterModule.CounterState, RootState>, payload: number) {
    mutations.increment(payload);
}