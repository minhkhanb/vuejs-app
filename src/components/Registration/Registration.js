import Vue from 'vue';

const RegistrationComponent = Vue.extend({
  props: ['users'],
  methods: {
    registerUser(user) {
      this.$emit('userRegistered', user);
      user.registered = true;
    },
  },
});

export default RegistrationComponent;
