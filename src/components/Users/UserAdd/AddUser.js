import Vue from 'vue';

import mdDatepicker from 'vue-material-datepicker';

const vuelidate = require('vuelidate');
const validators = require('vuelidate/lib/validators');

const UserAddComponent = Vue.extend({
  name: 'FormValidation',
  mixins: [vuelidate.validationMixin],

  components: {
    'md-datepicker': mdDatepicker,
  },
  props: {},
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
    },
    clearForm() {
      this.$v.$reset();
      this.form.firstName = null;
      // this.form.lastName = null
      // this.form.age = null
      this.form.gender = null;
      // this.form.email = null
    },
    saveUser() {
      this.sending = true;

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        //   this.lastUser = `${this.form.firstName} ${this.form.lastName}`
        //   this.lastUser = `${this.form.firstName} ${this.form.lastName}`
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        //   this.saveUser()
        var newMember = {
          firstName: String,
          gender: String,
        };
        newMember.firstName = this.form.firstName;
        newMember.gender = this.form.gender;
        this.$emit('userAdded', newMember);
        this.clearForm();
      }
    },

    renew() {
      this.$v.$reset();
      this.form.firstName = null;
      // this.form.lastName = null;
      // this.form.age = null;
      this.form.gender = null;
      // this.form.email = null;
    },

    addUser() {
      return true;
    },

    // disabledDates() {
    //   let disabled_dates = [];
    //   if (Date.getYear() <= 1950) {
    //     disabled_dates = disabled_dates.push(Date.getDay);
    //   }
    //   return false;
    // },
  },

  validations: {
    form: {
      firstName: {
        required: validators.required,
        minLength: (0, validators.minLength)(3),
      },
      //   lastName: {
      //     required: validators.required,
      //     minLength: (0, validators.minLength)(3)
      //   },
      //   age: {
      //     required: validators.required,
      //     maxLength: (0, validators.maxLength)(3)
      //   },
      gender: {
        required: validators.required,
      },
      //   email: {
      //     required: validators.required,
      //     email: validators.email
      //   }
    },
  },

  // beforeUpdate: function (e) {
  // },
  data() {
    return {
      userSaved: false,
      sending: false,
      lastUser: null,
      form: {
        firstName: null,
        // lastName: null,
        gender: null,
        // age: null,
        // email: null
      },

      selectedDate: '',
    };
  },
});

export default UserAddComponent;
