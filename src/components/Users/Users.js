import Vue from 'vue';

import AddUser from './AddUser/index';
import ListUser from './ListUser/index';

const UsersComponent = Vue.extend({
  components: {
    appAddUser: AddUser,
    appListUser: ListUser,
  },
});

export default UsersComponent;
