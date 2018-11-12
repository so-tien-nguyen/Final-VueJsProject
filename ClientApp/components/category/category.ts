import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Category } from '../../store/category';
import categoryStore from '../../store/category/category';


@Component 
export default class CategoryComponent extends Vue {
    categorys: Category[] = [];

    mounted(){
        categoryStore.actions.fetchCategory().then(data=>{
            this.categorys = data;
        });
    }
}
