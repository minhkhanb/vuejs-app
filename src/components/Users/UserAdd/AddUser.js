import Vue from 'vue';
import { DatePicker } from 'element-ui';

Vue.use(DatePicker);

const vuelidate = require('vuelidate');
const validators = require('vuelidate/lib/validators');

const UserAddComponent = Vue.extend({
  name: 'FormValidation',
  mixins: [vuelidate.validationMixin],

  components: {
    [DatePicker.name]: DatePicker,
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
      // date
      enabledRadio: '2',
      disabledRadio: '2',
      switches: {
        dinOn: true,
        plainOff: false,
        witefaultOn: true,
        defaultOff: false,
        plahIconsOn: true,
        withIconsOff: false
      },
      sliders: {
        simple: 30,
        rangeSlider: [20, 50]
      },
      selects: {
        simple: '',
        // countries: [{value: 'Bahasa Indonesia', label: 'Bahasa Indonesia'},
        //   {value: 'Bahasa Melayu', label: 'Bahasa Melayu'},
        //   {value: 'Català', label: 'Català'},
        //   {value: 'Dansk', label: 'Dansk'},
        //   {value: 'Deutsch', label: 'Deutsch'},
        //   {value: 'English', label: 'English'},
        //   {value: 'Español', label: 'Español'},
        //   {value: 'Eλληνικά', label: 'Eλληνικά'},
        //   {value: 'Français', label: 'Français'},
        //   {value: 'Italiano', label: 'Italiano'},
        //   {value: 'Magyar', label: 'Magyar'},
        //   {value: 'Nederlands', label: 'Nederlands'},
        //   {value: 'Norsk', label: 'Norsk'},
        //   {value: 'Polski', label: 'Polski'},
        //   {value: 'Português', label: 'Português'},
        //   {value: 'Suomi', label: 'Suomi'},
        //   {value: 'Svenska', label: 'Svenska'},
        //   {value: 'Türkçe', label: 'Türkçe'},
        //   {value: 'Íslenska', label: 'Íslenska'},
        //   {value: 'Čeština', label: 'Čeština'},
        //   {value: 'Русский', label: 'Русский'},
        //   {value: 'ภาษาไทย', label: 'ภาษาไทย'},
        //   {value: '中文 (简体)', label: '中文 (简体)'},
        //   {value: 'W">中文 (繁體)', label: 'W">中文 (繁體)'},
        //   {value: '日本語', label: '日本語'},
        //   {value: '한국어', label: '한국어'}],
        multiple: 'ARS',
      },
      tags: {
        dynamicTags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
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
