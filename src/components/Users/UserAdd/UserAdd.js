import Vue from 'vue';

const UserAddComponent = Vue.extend({
    components: {
    },
    props: {
    },
    methods: {
        cancel() {
            return false;
        },
        addUser() {
            return true;
        }
    },
    beforeUpdate: function(e) {

    },
    data() {
        return {
            userAdd: {
                selectedDate: '',
                name: '',
            }
        }
    }
});

export default UserAddComponent;
