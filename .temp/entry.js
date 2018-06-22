import Vue from 'vue'
import weex from 'weex-vue-render'
/*global Vue*/

weex.init(Vue)
/* weex initialized here, please do not move this line */
import router from './router';
const App = require('@/index.vue');
import mixins from '@/mixins';
/* eslint-disable no-new */
Vue.mixin(mixins);

new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

