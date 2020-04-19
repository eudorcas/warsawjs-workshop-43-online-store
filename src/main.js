import './index.html';
import { Cart } from './components/cart';
import { Product } from './components/product';
import Snackbar from 'node-snackbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'node-snackbar/dist/snackbar.css';
import { instance as ProductsService } from './services/products-service';

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
            Snackbar.show({ text: `${p.model.name} was added to cart` });
        } catch (err) {
            Snackbar.show({
                text: `${p.model.name} cannot be added to car `,
                actionTextColor: '#ff0000',
            });
        }
    });
}

async function renderProductList(cart) {
    const products = await ProductsService.fetchProducts();
    products.forEach(product => {
        renderProduct(cart, product);
    });
}

function main() {
    const cart = renderCart();
    renderProductList(cart);
}

main();
