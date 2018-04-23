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
      for (let i = 0; i < this.users.length; i++) {
        if (i === index) {
          this.items.remove(this.users[i]);
        }
      }
      console.log(this.users);
    },

  },
});

export default UsersComponent;
