import Vue from 'vue';

import UserAdd from './UserAdd/index';
import UserList from './UserList/index';

const UsersComponent = Vue.extend({
  components: {
    appUserAdd: UserAdd,
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
    userAdded(newMember) {
      this.users.push(newMember);
    },

    removeUser(index) {
      this.users.splice(index, 1);
    },

  },
});

export default UsersComponent;
