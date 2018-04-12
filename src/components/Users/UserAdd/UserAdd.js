import Vue from 'vue';

import mdDatepicker from 'vue-material-datepicker'

var _vuelidate = require("vuelidate");

var _validators = require("vuelidate/lib/validators");

const UserAddComponent = Vue.extend({
    name: "FormValidation",
    mixins: [_vuelidate.validationMixin],

    components: {
        'md-datepicker': mdDatepicker,
    },
    props: {
    },
    methods: {
        getValidationClass (fieldName) {
            const field = this.$v.form[fieldName]
    
            if (field) {
              return {
                'md-invalid': field.$invalid && field.$dirty
              }
            }
        },
        clearForm () {
            this.$v.$reset()
            this.form.firstName = null
            // this.form.lastName = null
            // this.form.age = null
            this.form.gender = null
            // this.form.email = null
        },
        saveUser () {
            this.sending = true
    
            // Instead of this timeout, here you can call your API
            window.setTimeout(() => {
            //   this.lastUser = `${this.form.firstName} ${this.form.lastName}`
            //   this.lastUser = `${this.form.firstName} ${this.form.lastName}`
              this.userSaved = true
              this.sending = false
              this.clearForm()
            }, 1500)
        },
        validateUser () {
            this.$v.$touch()
    
            if (!this.$v.$invalid) {
            //   this.saveUser()
            var new_member = {
                firstName: String,
                gender: String
            };
            new_member.firstName = this.form.firstName;
            new_member.gender = this.form.gender;            
            this.$emit('userAdded', new_member);
            }
            this.clearForm();
        },

        renew() {
            this.$v.$reset()
            this.form.firstName = null
            // this.form.lastName = null
            // this.form.age = null
            this.form.gender = null
            // this.form.email = null
        },

        addUser() {
            return true;
        },

        disabledDates() {
            let disabled_dates = [];
            if (Date.getYear() <= 1950) {
                disabled_dates = disabled_dates.push(Date.getDay);
            }
            return false;
        }
    },

    validations: {
        form: {
          firstName: {
            required: _validators.required,
            minLength: (0, _validators.minLength)(3)
          },
        //   lastName: {
        //     required: _validators.required,
        //     minLength: (0, _validators.minLength)(3)
        //   },
        //   age: {
        //     required: _validators.required,
        //     maxLength: (0, _validators.maxLength)(3)
        //   },
          gender: {
            required: _validators.required
          },
        //   email: {
        //     required: _validators.required,
        //     email: _validators.email
        //   }
        }
      },

    beforeUpdate: function(e) {
    },
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

            userAdd: {
                selectedDate: '',
                name: '',
            },

            options: {
                lang : 'en',
                startsOnSunday: false,
                format:'YYYY-MM-DD',
                btnStrOk : 'Ok',
                btnStrCancel : 'Cancel',
                overlayOpacity : 0.5, //0.5 as default
                dismissible : true //as true as default
                //format:"YYYY-MM-DD HH:mm:ss"
              },
              limit:[{
                  type: 'weekday',
                  available: [1,2,3,4,5]
                },
                {
                 type:'fromto',
                 from:'2016-02-01',
                 to:'2016-02-20'
                }]
        }
    }
});

export default UserAddComponent;
