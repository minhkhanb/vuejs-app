import Vue from 'vue';

import UserAdd from './UserAdd/index';
import UserList from './UserList/index';

const UsersComponent = Vue.extend({
  components: {
    UserAdd,
    appUserList: UserList,
  },

  props: {
  },

  computed: {
  },

  data() {
    return {
      users: [],
    };
  },

  methods: {
    userAdded2qqqwww(newMember) {
      this.users.push(newMember);
    },

    removeUser(index) {
      this.users.splice(index, 1);
    },

  },
});

export default UsersComponent;
