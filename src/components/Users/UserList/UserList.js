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
    toLower: function (text) {
      return text.toString().toLowerCase();
    },

    searchByName: function (items, term) {
      if (term) {
        return items.filter(item => toLower(item.name).includes(toLower(term)));
      }

      return items;
    },
    newUser() {
      window.alert('Noop');
    },
    searchOnTable() {
      this.searched = searchByName(this.users, this.search);
    },

    removeItem(index) {
      return true;
    },

    // convert(s) {
    //   const arr = s.split(',');
    //   return (
    //     <ul>{arr.map((item, index) => (
    //       <li key={index}>{item}</li>
    //     ))}</ul>
    //   )
    // },

    // convertHours (s) {
    //   let arr = s.split(',');
    //   return (
    //     <ul> {arr.map((item,index) => (
    //         <li key={index}>{Number(item) > 12 ? ((Number(item) - 12) + "PM") : (Number(item) + "AM")}</li>
    //         ))}
    //     </ul>)
    // },
  },
  created() {
    this.searched = this.users;
  },
});

export default ListUserComponent;
