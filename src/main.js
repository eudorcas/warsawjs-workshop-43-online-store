import './index.html';
import { Cart } from './components/cart';
import { Product } from './components/product';
import 'bootstrap/dist/css/bootstrap.min.css';

console.log('hello');

function main() {
    const $toolbar = document.querySelector('.toolbar');
    const $products = document.querySelector('.products');
    const c = new Cart();
    c.render($toolbar);
    const p = new Product();
    p.render($products);
}

main();
