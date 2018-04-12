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

  data() {
    return {
      users: [],
    }
  },

  methods: {
    userAdded(new_member) {
      this.users.push(new_member);

      console.log(this.users);
    },

  },
});

export default UsersComponent;
