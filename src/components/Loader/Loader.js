import Vue from 'vue';
import Spinner from 'vue-simple-spinner';

const LoaderComponent = Vue.extend({
  components: {
    Spinner,
  },
});

export default LoaderComponent;
