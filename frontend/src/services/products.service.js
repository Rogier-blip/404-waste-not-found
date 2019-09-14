import { BehaviorSubject } from 'rxjs';
import axios from "axios";

export default class ProductsService {
    productsScanned = [];

    instance = ProductsService;

    static getInstance() {
        if (!ProductsService.instance) {
            ProductsService.instance = new ProductsService();
        }

        return ProductsService.instance;
    }

    productsCounter$ = new BehaviorSubject(null);

    addProductCounter(value) {
        this.productsCounter$.next(value);
    }

    getProductBasedOnBarcode(barcode) {
        axios.get("http://localhost:3000/product/details/" + barcode.codeResult.code)
            .then(result => {
                if (result.data.length > 0) {
                    this.productsScanned.push(result.data[0]);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

}
