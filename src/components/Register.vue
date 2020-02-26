<template>

  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-book" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

          <form @submit.prevent="submit">
            <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
              <label class="form__label">Business Name</label>
              <input class="form__input" v-model.trim="$v.name.$model"/>
            </div>
            <div class="error" v-if="!$v.name.required">Name is Required</div>
            <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
              <label class="form__label">Name</label>
              <input class="form__input" v-model.trim="$v.name.$model"/>
            </div>
            <div class="error" v-if="!$v.name.required">Name is Required</div>
            <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
              <label class="form__label" >Email</label>
              <input class="form__input" v-model.trim="$v.name.$model"/>
            </div>
            <div class="error" v-if="!$v.name.required">Name is Required</div>
            <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
              <label class="form__label">Password</label>
              <input class="form__input" v-model.trim="$v.name.$model"/>
            </div>
            <div class="error" v-if="!$v.name.required">Name is Required</div>
            <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>

            <div>

            <p>
              <b-btn class="btn btn-primary btn1" to="/">Back</b-btn>
              <b-btn class="btn btn-primary btn2" to="bdetails">Next</b-btn>

            </p>
            </div>

          </form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import VueForm from 'vueform'
import BookingService from '../services/bookingservice'
import { required, minLength } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'Register',
  data () {
    return {
      messagetitle: ' Book Now ',
      name: '',
      service: 'Barber',
      organisation: '',
      types: '',
      day: '',
      times: '',
      review: '',
      bookings: {},
      submitStatus: null

    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(5)
    },
    review: {
      required,
      minLength: minLength(9)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.$noty.show('Appointment Successfully Booked')
          this.submitStatus = 'OK'
          var booking = {
            name: this.name,
            service: this.service,
            organisation: this.organisation,
            types: this.types,
            day: this.day,
            times: this.times,
            review: this.review

          }
          this.booking = booking
          console.log('Submitting in BookingForm : ' + JSON.stringify(this.booking, null, 5))
          this.submitBooking(this.booking)
        }, 500)
      }
    },
    submitBooking: function (booking) {
      console.log('submitBooking!')
      console.log('Submitting in submitBooking : ' + booking)
      BookingService.postBooking(booking)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }

}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }

  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #ff8d1e;
    color: whitesmoke;
    border-radius: 20px;
  }

  .error:focus {
    outline-color: #ffa519;
  }

</style>
