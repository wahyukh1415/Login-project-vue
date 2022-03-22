import Vue from 'vue'
import VueRouter  from 'vue-router'
import Home from '../view/Home'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: Home,
        component: Home
    },
]

const router = new VueRouter({
    node: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router