import Router from './services/Router.js';
import Store from './services/Store.js';
import { loadData } from './services/Menu.js';
// components
import CartItem from './components/CartItem.js';
import DetailsPage from './components/DetailsPage.js';
import MenuPage from './components/MenuPage.js';
import OrderPage from './components/OrderPage.js';
import ProductItem from './components/ProductItem.js';

window.app = {};
app.router = Router;
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
  app.router.init();
  loadData();
});

window.addEventListener('appcartchange', () => {
  const badge = document.querySelector('#badge');
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});

// const $ = () => document.querySelector.call(this, arguments);
// const $$ = () => document.querySelectorAll.call(this, arguments);
// HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
// HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
// HTMLElement.prototype.$ = (s) => this.querySelector(s);
// HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);
