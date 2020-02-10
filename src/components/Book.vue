<template>

  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-book" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">

  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Name</label>
      <input class="form__input" v-model.trim="$v.name.$model"/>
    </div>
    <div class="error" v-if="!$v.name.required">Name is Required</div>
    <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
    <div class="form-group">
      <label class="form-label">Select Business Type </label>
      <select id="service" name="service" class="form-control" type="text" v-model="service">
        <option value="null" selected disabled hidden>Choose your Sector Type</option>
        <option value="Direct">Barber</option>
      </select>
    </div>
    <div class="form-group">
    <label class="form-label">Select Organisation Name  </label>
    <select id="organisation" name="organisation" class="form-control" type="text" v-model="organisation">
      <option value="null" selected disabled hidden>Choose your Sector Type</option>
      <option value="DesignerCutz">DesignerCutz</option>
      <option value="TurkishBarbers">Turkish Barbers</option>

    </select>
        </div>
    <div class="form-group">
      <label class="form-label">Select Service </label>
      <select id="types" name="types" class="form-control" type="text" v-model="types">
        <option value="null" selected disabled hidden>Choose Service Type</option>
        <option value="Regular Hair cut - €10.00 (30 mins)">Regular Hair cut - €10.00 (30 mins)</option>
        <option value="Regular Hair cut & Beard - €15.00 (45 mins)">Regular Hair cut & Beard - €15.00 (45 mins)</option>
        <option value="Beard Trim - €5.00 (5 mins)">Beard Trim - €5.00 (5 mins)</option>
        <option value="Lineup- €5.00 (10 mins)">Lineup- €5.00 (10 mins) </option>

      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Select Day </label>
      <select id="day" name="organisation" class="form-control" type="text" v-model="day">
        <option value="null" selected disabled hidden>Choose Service Type</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">Select Time </label>
      <select id="times" name="organisation" class="form-control" type="text" v-model="times">
        <option value="null" selected disabled hidden>Choose Service Type</option>
        <option value="12.00AM">12.00AM</option>
        <option value="1.00AM">1.00AM</option>
        <option value="2.00AM">2.00AM</option>
        <option value="3.00AM">3.00AM</option>
        <option value="slot5">4.00AM</option>
        <option value="4.00AM">5.00AM</option>
        <option value="6.00AM">6.00AM</option>
        <option value="7.00AM">7.00AM</option>
        <option value="8.00AM">8.00AM</option>
        <option value="9.00AM">9.00AM</option>

      </select>
    </div>

    <div class="form-group" :class="{ 'form-group--error': $v.review.$error }">
      <label class="form__label">Review</label>
      <input class="form__input" v-model.trim="$v.review.$model"/>
    </div>
    <div class="error" v-if="!$v.review.required">Review is Required</div>
    <div class="error" v-if="!$v.review.minLength">Review must have at least {{$v.review.$params.minLength.min}} letters.</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Make Booking</button>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your Booking!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Booking...</p>
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
  name: 'Book',
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
  .btn1 {
    width: 300px;
    font-size: x-large;
    background: #3dff0a;
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
    background: red;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }

</style>
