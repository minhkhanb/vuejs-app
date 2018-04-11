import Vue from 'vue';

import UserAdd from './UserAdd/index';
import UserList from './UserList/index';

const UsersComponent = Vue.extend({
  components: {
    appUserAdd: UserAdd,
    appUserList: UserList,
  },

  props: {
    firstName: String,
    gender: String
  },

  methods: {

  },

  data() {
    return {

    }
  },
});

export default UsersComponent;
