import './index.html';
import { Cart } from './components/cart';
import { Product } from './components/product';
import Snackbar from 'node-snackbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'node-snackbar/dist/snackbar.css';
import DUMMY_PRODUCTS from '../test/dummies/products.dummy.json';

console.log('hello');

function renderCart() {
    const $toolbar = document.querySelector('.toolbar');
    const c = new Cart();
    c.render($toolbar);
    return c;
}

function renderProduct(cart, product) {
    const $products = document.querySelector('.products');
    const p = new Product();
    p.model = product;
    p.render($products);
    p.onClickAdd(async () => {
        try {
            await cart.addProduct(p);
            Snackbar.show({ text: 'product was added to cart' });
        } catch (err) {
            console.error('productcannot be added to cart');
        }
    });
}

function renderProductList(cart) {
    const products = DUMMY_PRODUCTS;
    products.forEach(product => {
        renderProduct(cart, product);
    });
}

function main() {
    const cart = renderCart();
    renderProductList(cart);
}

main();
