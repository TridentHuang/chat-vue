import Vue from 'vue'
import VueRouter from 'vue-router'
import MainFirst from "../components/MainFirst"
import MainSecond from "../components/MainSecond"
import MainThree from "../components/MainThree"
import MainFour from "../components/MainFour"

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainFirst
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/second',
        name: 'MainSecond',
        component: MainSecond
    },
    {
        path: '/three',
        name: 'MainThree',
        component: MainThree
    },
    {
        path: '/four',
        name: 'MainFour',
        component: MainFour
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
