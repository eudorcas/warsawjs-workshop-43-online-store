import './index.html';
import { Cart } from './components/cart';
import { Product } from './components/product';
import 'bootstrap/dist/css/bootstrap.min.css';

console.log('hello');

function renderCart() {
    const $toolbar = document.querySelector('.toolbar');
    const c = new Cart();
    c.render($toolbar);
}

function renderProducts() {
    const $products = document.querySelector('.products');

    const products = Array.from({ length: 3 });
    products.forEach(el => {
        const p = new Product();
        return p.render($products);
    });
}

function main() {
    renderCart();
    renderProducts();
}

main();
