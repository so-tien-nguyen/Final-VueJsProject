import * as CategoryModule from './index';
import { storeBuilder } from '../store';
import * as CategoryMutations from './mutations';
import * as CategoryActions from './actions';


const categoryList: CategoryModule.Category[] = [
    {id: 1, name: "Category A", image:"ca1"},
    {id: 2, name: "Category B", image:"ca2"},
    {id: 3, name: "Category C", image:"ca3"},
    {id: 4, name: "Category D", image:"ca4"}
]
//State
const state: CategoryModule.CategoryState = {
    category : [] = categoryList as CategoryModule.Category[]
}

export const b = storeBuilder.module<CategoryModule.CategoryState>("category", state);
const stateGetter = b.state();

//getters

//mutations

//actions
export const actions = {
    fetchCategory: b.dispatch(CategoryActions.fetchCategory)
}

// exported "counter" module interface
const categoryStore = {
    get state() { return stateGetter() },
    actions: actions
}

export default categoryStore