import Vue from 'vue';

import UserAdd from './UserAdd/index';
import ListUser from './UserList/index';

const UsersComponent = Vue.extend({
  components: {
    appUserAdd: UserAdd,
    appUserList: ListUser,
  },
});

export default UsersComponent;
