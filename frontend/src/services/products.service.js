import {BehaviorSubject} from 'rxjs';

export default class ProductsService {

    instance =  ProductsService;

    static getInstance()
    {
        if (!ProductsService.instance) {
            ProductsService.instance = new ProductsService();
        }

        return ProductsService.instance;
    }

    productsCounter$ = new BehaviorSubject(null);

    addProductCounter(value) {
        this.productsCounter$.next(value);
    }
}
