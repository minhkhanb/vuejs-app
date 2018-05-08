import Vue from 'vue';
// import popup from './popup';

// const Dialog = { template: '#modal-template' };
const Dialog2 = { template: '#modal-template2' };

const PopupComponent = Vue.extend({
  components: {
    // 'modal': Dialog,
    // 'popup': popup,
    'modal2': Dialog2,
  },

  data() {
    return {
      showModal: false,
      showModal2: false,
    };
  },
});

export default PopupComponent;
