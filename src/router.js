import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '@c/Principal.vue'
import Agendar from '@c/Agendar.vue'
import Menu from '@c/Menu.vue'
import Nosotros from '@c/Nosotros.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'principal',
        component: Principal
    },
    {
        path: '/agendar',
        name: 'agendar',
        component: Agendar
    },
    {
        path: '/menu',
        name: 'menu',
        component: Menu
    },
    {
        path: '/nosotros',
        name: 'nosotros',
        component: Nosotros
    },
    {
        path: '*',
        name: 'all',
        component: Principal
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

// PARA AÑADIR SOPORTE PARA REQUERIMIENTO DE LOGUEO
/*router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('log') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})*/

export default router;
