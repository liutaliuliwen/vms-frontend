//1. 定义路由组件

import Login from './components/Login'
import Main from './components/Main'
import Supplier from './components/Supplier'
import Customer from './components/Customer'
import Goods from './components/Goods'
import VueRouter from 'vue-router'

//2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
    {path: '/login', component: Login},
    {path: '/main', component: Main,
     children: [
         {
            path: 'supplier',
            component: Supplier
         },
         {
            path: 'customer',
            component: Customer
         },
         {
            path: 'goods',
            component: Goods
         }
         
         
     ]},
    {path: '*', component: Login}
]


// 3. 创建 router 实例, 然后传 `routes` 配置
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router