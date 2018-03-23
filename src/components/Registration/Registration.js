import Vue from 'vue';

import Registrations from '@/components/Registration/index';

const RegistrationComponent = Vue.extend({
  components: {
    appRegistrations: Registrations,
  },
  props: {
    // id: Infinity,
    // name: String,
    // registered: Boolean,
  },
  methods: {
    registerUser(user) {
      this.$emit('userRegistered', user);
      user.registered = true;
    },
  },
  computed: {
    unregisteredUsers() {
      return this.users.filter((user) => {
        return !user.registered;
      });
    },
  },
  data() {
    return {
      users: [
        { id: 1, name: 'Max', registered: false },
        { id: 2, name: 'Anna', registered: false },
        { id: 3, name: 'Chris', registered: false },
        { id: 4, name: 'Sven', registered: false },
      ],
    };
  },
});

export default RegistrationComponent;
