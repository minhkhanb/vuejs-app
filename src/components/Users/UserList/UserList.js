import Vue from 'vue';

const ListUserComponent = Vue.extend({
  props: ['users'],
  // name: 'TableSearch',
  // data: () => ({
  //   search: null,
  //   searched: [],
  //   users_added: [
  //     {
  //       id: 1,
  //       name: "Shawna Dubbin",
  //       email: "sdubbin0@geocities.com",
  //       gender: "Male",
  //       title: "Assistant Media Planner"
  //     },
  //     {
  //       id: 2,
  //       name: "Odette Demageard",
  //       email: "odemageard1@spotify.com",
  //       gender: "Female",
  //       title: "Account Coordinator"
  //     },
  //   ],
  // }),
  methods: {
    // const toLower = text => {
    //   return text.toString().toLowerCase()
    // },
    //
    // const searchByName = (items, term) => {
    //   if (term) {
    //     return items.filter(item => toLower(item.name).includes(toLower(term)))
    //   }
    //
    //   return items
    // },
    // newUser() {
    //   window.alert('Noop')
    // },
    // searchOnTable() {
    //   this.searched = searchByName(this.users, this.search)
    // },

    // calcAge (s) {
    //   // let dateString = s.split('-');
    //    let today = new Date()
    //    let birthDate = new Date(s)
    //    console.log(birthDate)
    //    let age = today.getFullYear() - birthDate.getFullYear()
    //    let m = today.getMonth() - birthDate.getMonth()
    //    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //      age--
    //    }
    //    console.log(age)
    //    if (age > 19) {
    //      return 'Yes'
    //    }
    //    return 'No'
    //  },

    //  convert (s) {
    //   let arr = s.split(',')
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
    //     </ul>
  
    //   )
    // }
  },
  // created() {
  //   this.searched = this.users;
  // },
});

export default ListUserComponent;
