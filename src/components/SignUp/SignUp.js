import Vue from 'vue';
import Registration from '@/components/Registration/index';
import Registrations from '@/components/Registrations/index';

const SignUpComponent = Vue.extend({
  components: {
    appRegistration: Registration,
    appRegistrations: Registrations,
  },

  props: {
  },

  data() {
    return {
      registrations: [],
      users: [
        { id: 1, name: 'Max', registered: false },
        { id: 2, name: 'Anna', registered: false },
        { id: 3, name: 'Chris', registered: false },
        { id: 4, name: 'Sven', registered: false },
      ],
    };
  },
  computed: {
    unregisteredUsers() {
      return this.users.filter((user) => {
        return !user.registered;
      });
    },
  },
  methods: {
    userRegistered(user) {
      const date = new Date;
      this.registrations.push({ userId: user.id, name: user.name, date: date.getMonth() + '/' + date.getDay() });
    },
    userUnregistered(registration) {
      const user = this.users.find(user => {
        return user.id === registration.userId;
      });
      user.registered = false;
      this.registrations.splice(this.registrations.indexOf(registration), 1);
    },
  },

});

export default SignUpComponent;
