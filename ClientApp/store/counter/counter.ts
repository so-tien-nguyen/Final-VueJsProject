import * as CounterModule from './index';
import { storeBuilder } from '../store';
import * as CounterMutations from './mutations';
import * as CounterActions from './actions';

//State
const state: CounterModule.CounterState = {
    counter: {} as CounterModule.Counter,
}

export const b = storeBuilder.module<CounterModule.CounterState>("counter", state);
const stateGetter = b.state();

//getters

//mutations
export const mutations = {
    increment: b.commit(CounterMutations.increment)
}

//actions
export const actions = {
    increment: b.dispatch(CounterActions.increment)
}

// exported "counter" module interface
const counterStore = {
    get state() { return stateGetter() },
    mutations: mutations,
    actions: actions
}

export default counterStore