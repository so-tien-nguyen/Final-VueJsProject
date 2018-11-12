import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getStoreBuilder } from "vuex-typex";
import { RootState } from './rootstate';

Vue.use(Vuex);
export const storeBuilder = getStoreBuilder<RootState>();