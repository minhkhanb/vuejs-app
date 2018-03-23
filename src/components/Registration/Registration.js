import Vue from 'vue';

import Registrations from '@/components/Registration/index';

const RegistrationComponent = Vue.extend({
  components: {
    appRegistrations: Registrations,
  },
  props: {
  },
  methods: {
    userUnregistered(registration) {
      const user = this.users.find(user => {
        return user.id === registration.userId;
      });
      user.registered = false;
      this.registrations.splice(this.registrations.indexOf(registration), 1);
    },
    unregister(registration) {
      this.$emit('userUnregistered', registration);
    },
    userRegistered(user) {
      const date = new Date;
      this.registrations.push({ userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay() });
    },
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
