import Vue from 'vue';
import VueMaterial from 'vue-material';
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components';

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(VueMaterial);

const AddUserComponent = Vue.extend({
  components: {
    MdButton,
  },
});

export default AddUserComponent;
