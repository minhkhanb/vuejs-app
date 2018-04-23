import Vue from 'vue';

const ListUserComponent = Vue.extend({
  props: ['users'],
  name: 'TableSearch',
  data: () => ({
    search: null,
    searched: [],
  }),
  computed: {
  },
  methods: {
    removeElement(index) {
      // this.items.$remove(index);
      this.$emit('removeUser', index);
    },
  },
  created() {
    this.searched = this.users;
  },
});

export default ListUserComponent;
