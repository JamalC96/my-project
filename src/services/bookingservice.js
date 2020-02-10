import Api from '@/services/api'

export default {
  fetchBookings () {
    return Api().get('/bookings')
  },

  postBooking (booking) {
    return Api().post('/bookings', booking,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteBooking (id) {
    return Api().delete(`/bookings/${id}`)
  }
}
