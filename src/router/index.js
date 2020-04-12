import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Bookings from '../components/Bookings'
import Book from '../components/Book'
import GoogleLogin from '../components/GoogleLogin'
import Register from '../components/Register'
import BusinessDetails from '../components/BusinessDetails'
import BLogin from '../components/BLogin'
import BRegister from '../components/BRegister'
import GoogleMap from '../components/GoogleMap'
import BProfile from '../components/BProfile'

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
    },
    {
      path: '/blogin',
      name: 'BLogin',
      component: BLogin
    },
    {
      path: '/bregister',
      name: 'BRegister',
      component: BRegister
    },
    {
      path: '/GoogleMap',
      name: 'GoogleMap',
      component: GoogleMap
    },
    {
      path: '/bprofile',
      name: 'BProfile',
      component: BProfile
    }

  ]
})
