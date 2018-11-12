import * as CategoryModule from "./index"
import { BareActionContext } from "vuex-typex";
import { RootState } from "../rootstate";
import categoryStore from "./category";

export const fetchCategory = function fetchCategory(context: BareActionContext<CategoryModule.CategoryState, RootState>): CategoryModule.Category[] {
    return categoryStore.state.category;
}