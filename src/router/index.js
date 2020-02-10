import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bookings from '../components/Bookings'
import Book from '../components/Book'
import GoogleLogin from '../components/GoogleLogin'
import Register from '../components/Register'
import BusinessDetails from '../components/BusinessDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bookings',
      name: 'Bookings',
      component: Bookings
    },
    {
      path: '/addbooking',
      name: 'Book',
      component: Book
    },
    {
      path: '/login',
      name: 'GoogleLogin',
      component: GoogleLogin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/bdetails',
      name: 'BusinessDetails',
      component: BusinessDetails
    }

  ]
})
