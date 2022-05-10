import {createRouter, createWebHistory} from 'vue-router';
import AddProduct from '../views/AddProduct'
import Menu from '../views/Menu'

const routes = [
  {
    path: '/',
    name: 'Menu',
    component: Menu,
    props: true
  },
  {
    path: '/addproduct',
    name: 'Add Product',
    component: AddProduct,
    props: true
  }
]

const router = createRouter({
  linkExactActiveClass: 'is-active',
  history: createWebHistory(),
  routes
})

export default router