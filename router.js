import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Home from '../views/Home.vue'
import Formulario from '../views/Formulario.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'is-active',
    routes: [
        {
            path: '/',
            name: 'app',
            component: App
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/formulario',
            name: 'formulario',
            component: Formulario
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },

    ]
})
 
export default router
    
