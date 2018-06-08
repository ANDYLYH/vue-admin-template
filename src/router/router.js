// router
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import index from '../components/index.vue'

import attendance from '../components/attendance.vue'
import leave_record from '../components/leave_record.vue'
import overtime_petitioner from '../components/overtime_petitioner.vue'
import overtime_record from '../components/overtime_record.vue'
import overtime_pass from '../components/overtime_pass.vue'
import import_data from '../components/import_data.vue'
import store from '../store/index'

Vue.use(VueRouter)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })


// 0. 如果使用模块化机制编程， 要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点在讨论嵌套路由。
const routes = [
  { path: '/',name:"home",component: home},
  { path: '/attendance',name:"attendance",component: attendance},
  { path: '/leave_record',name:"leave_record",component: leave_record},
  { path: '/overtime_pass',name:"overtime_pass",component: overtime_pass},
  { path: '/overtime_record',name:'overtime_record',component: overtime_record},
  { path: '/overtime_petitioner',name:"overtime_petitioner",component: overtime_petitioner},
  { path: '/import_data',name:"import_data",component: import_data}

]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  mode: 'history',
  routes // （缩写）相当于 routes: routes
});
   
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  store,
  router,
  render: h => h(index)
}).$mount('#app');
// 路由切换
router.beforeEach(function (to, from, next) {   
    // const auth = store.state.auth;  
    //跳转至上述3个页面  
    // if (nextRoute.indexOf(to.name) >= 0) {  
    //     //未登录  
    //     if (!store.state.auth.IsLogin) {  
    //         vueRouter.push({name: 'login'})  
    //     }  
    // }  
    // //已登录的情况再去登录页，跳转至首页  
    // if (to.name === 'login') {  
    //     if (auth.IsLogin) {  
    //         vueRouter.push({name: 'home'});  
    //     }  
    // }  
    console.log(to.name,from.name)
    next();  
});
// 现在，应用已经启动了！