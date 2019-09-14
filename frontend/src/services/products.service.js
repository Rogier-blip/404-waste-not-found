import { BehaviorSubject } from "rxjs"
import axios from "axios"

export default class ProductsService {
    productsScanned = [];
    barcodes = [];
    instance = ProductsService;


    static getInstance() {
        if (!ProductsService.instance) {
            ProductsService.instance = new ProductsService()
        }

        return ProductsService.instance
    }


    productsCounter$ = new BehaviorSubject(null);
    productIsValid$ = new BehaviorSubject(false);
    scannedProducts$ = new BehaviorSubject([]);

    addProductCounter(value) {
        this.productsCounter$.next(value)
    }

    getBarcodes() {
        axios
            .get("http://localhost:3000/product/barcodes")
            .then(result => {
                this.barcodes = result.data
            })
            .catch(error => {
                console.log(error)
            })
    }

    checkForExistanceOfBarcode(barcode) {
        return this.barcodes.find(item => item === barcode)
    }

    addProductToBasket(products) {
        this.scannedProducts$.next(products);
    }

    getProductBasedOnBarcode(barcode) {

        axios.get('http://localhost:3000/product/details/' + barcode.codeResult.code)
            .then(result => {
                if (result.data.length > 0) {
                    this.productsScanned.push(result.data[0]);
                    this.addProductToBasket(this.productsScanned);
                    this.productIsValid$.next(true);
                } else {
                    this.productIsValid$.next(false);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

}
