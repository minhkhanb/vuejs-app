import Vue from 'vue';

const Dialog = { template: '#modal-template' };
const Dialog2 = { template: '#modal-template2' };

const PopupComponent = Vue.extend({
  components: {
    'modal': Dialog,
    'modal2': Dialog2,
  },

  data() {
    return {
      showModal: false,
    };
  },
});

export default PopupComponent;
