/*global Vue*/
import Router from 'vue-router';
import ViewHome from './pages/home';
import ViewTopic from './pages/ViewTopic';
import ViewClass from './pages/ViewClass';
import ViewShop from './pages/ViewShop';
import ViewMy from './pages/ViewMy';
Vue.use(Router)

module.exports = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: ViewHome },
    { path: '/topic', component: ViewTopic },
    { path: '/class', component: ViewClass },
    { path: '/shop', component: ViewShop },
    { path: '/my', component: ViewMy }
  ]
})
