import Vue from 'vue';

const RegistrationsComponent = Vue.extend({
  props: ['registrations'],
  methods: {
    unregister(registration) {
      this.$emit('userUnregistered', registration);
    }
  },
  computed: {
    total() {
      return this.registrations.length;
    }
  }
});

export default RegistrationsComponent;
