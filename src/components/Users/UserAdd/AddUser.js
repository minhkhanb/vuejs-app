import Vue from 'vue';
import { DatePicker } from 'element-ui';
import mdPicker from 'vue-bootstrap-datetimepicker';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';

Vue.use(DatePicker);

const vuelidate = require('vuelidate');
const validators = require('vuelidate/lib/validators');

const UserAddComponent = Vue.extend({
  name: 'FormValidation',
  mixins: [vuelidate.validationMixin],

  components: {
    [DatePicker.name]: DatePicker,
    mdPicker: mdPicker,
  },
  props: {},
  computed: {
    yearsBD() {
      let arr = [];
      const d = new Date();
      const yearPresent = d.getFullYear();
      for (let i = 1950; i < yearPresent; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
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
      this.form.datePicker = null;
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

    capitalizeFirstLetters(str) {
      return str.toLowerCase().replace(/^\w|\s\w/g, (letter =>
        letter.toUpperCase()
      ));
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        //   this.saveUser()
        const newMember = {
          firstName: String,
          gender: String,
          datePicker: String,
          age: String,
        };
        const d = new Date();
        const yearPresent = d.getFullYear();
        newMember.firstName = this.capitalizeFirstLetters(this.form.firstName);
        newMember.gender = this.form.gender;
        newMember.datePicker = this.form.datePicker;
        newMember.age = yearPresent - this.form.datePicker;

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
      date: new Date(),
      config: {
        format: 'DD/MM/YYYY',
        useCurrent: false,
      },
      userSaved: false,
      sending: false,
      lastUser: null,
      form: {
        firstName: null,
        // lastName: null,
        gender: null,
        datePicker: null,
        // age: null,
        // email: null
      },

      selectedDate: '',
      // date
      enabledRadio: '2',
      disabledRadio: '2',
      selects: {
        simple: '',
        multiple: 'ARS',
      },
      tags: {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: '',
      },
      pickerOptions1: {
        shortcuts: [{
          text: 'Today',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        },
          {
            text: 'Yesterday',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: 'A week ago',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
      },
      datePicker: '',
      dateTimePicker: '',
      timePicker: '',
    };
  },
});

export default UserAddComponent;
