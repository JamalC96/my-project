<template>
  <div id="app1">
    <v-client-table :columns="columns" :data="bookings" :options="options">
      <a slot="remove" v-if="user" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteBooking(props.row._id)"></a>
      <b-button slot="activity" id="hide-seen" v-on:click="toggleSeen">Pending</b-button>
    </v-client-table>
  </div>
</template>

<script>
import BookingService from '../services/bookingservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import firebase from 'firebase'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Bookings',
  data () {
    return {
      messagetitle: ' Bookings ',
      bookings: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'name', 'service', 'organisation', 'types', 'day', 'times', 'review', 'remove', 'activity'],
      options: {
        perPage: 10,
        filterable: ['service', 'organisation'],
        headings: {
          _id: 'ID',
          name: 'Name ',
          service: 'Business Type',
          organisation: 'Business Name',
          types: 'Service',
          day: 'Day',
          times: 'Time',
          review: 'Review',
          job: 'Pending'
        }
      }
    }
  },
  created () {
    this.loadBookings()
    var GoogleUser = this
    firebase.auth().onAuthStateChanged(function (user) {
      // example
      if (user) {
        GoogleUser.user = user
        GoogleUser.username = GoogleUser.user.displayName
        GoogleUser.photo = GoogleUser.user.photoURL
      }
    })
    this.user = firebase.auth().currentUser || false
  },
  methods: {
    loadBookings: function () {
      BookingService.fetchBookings()
        .then(response => {
          // JSON responses are automatically parsed.
          this.bookings = response.data
          console.log(this.bookings)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    toggleSeen: function () {
      this.job = 'Accepted'
    },
    deleteBooking: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true
        // showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result === true) {
          BookingService.deleteBooking(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadBookings()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Booking ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log('SWAL Else Result : ' + result.value)
          this.$swal('Cancelled', 'Your Donation still Counts!', 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }

  #app1 {
    width: 60%;
    margin: 0 auto;
  }

</style>
