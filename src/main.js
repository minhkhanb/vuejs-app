// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Add material
import VueMaterial from 'vue-material';
import Element from 'element-ui';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Popover from 'vue-js-popover';
import popup from './components/PopupFixed/popup';


import App from './App';
import router from './router';

Vue.component('popup', popup);
Vue.use(VueMaterial);
Vue.use(Element);
Vue.use(Popover);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
});
