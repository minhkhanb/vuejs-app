import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld';
import Test from '@/components/Test';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp/index';
import Users from '@/components/Users/index';
import Loader from '@/components/Loader/index';
import Tooltip from '@/components/Tooltip/index';
import Popup from '@/components/Popup/index';
import PopupFixed from '@/components/PopupFixed/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/loader',
      name: 'Loader',
      component: Loader,
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: Tooltip,
    },
    {
      path: '/popup',
      name: 'Popup',
      component: Popup,
    },
    {
      path: '/popup-fixed',
      name: 'PopupFixed',
      component: PopupFixed,
    },
  ],
});
