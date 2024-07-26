import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailsPage from './pages/ProductDetailsPage.vue'
import ShoppingCart from './pages/ShoppingCart.vue'


createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
      path: '/product',
      component: ProductsPage,
    },
    {
        path: '/product/:id',
      component: ProductDetailsPage,

    },
    {
        path: '/cart',
      component: ShoppingCart,

    },

]}))
  
.mount('#app')
