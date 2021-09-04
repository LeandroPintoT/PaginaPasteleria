import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '@/components/Principal.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'principal',
        component: Principal,
        meta: {
            guest: true
        }
    },
]

const router = new VueRouter({
    routes,
    mode: "history"
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
