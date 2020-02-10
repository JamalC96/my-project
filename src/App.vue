<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">BQuick</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/bookings"><i class="fa fa-list" style="padding: 5px"> Manage Bookings</i></b-nav-item>
          <b-nav-item to="/addbooking"><i class="fa fa-bookmark" style="padding: 5px"> Make a booking</i></b-nav-item>

        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/register"><i class="fa fa-id-card" aria-hidden="true" style="padding: 5px"> For Business</i></b-nav-item>
          <b-nav-item v-if="photo"><img :src="photo" style="width: 35px; height: 35px" /></b-nav-item>
          <b-nav-item to="/login" v-else><i class="fa fa-user-circle-o" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item to="/logout"><i class="fa fa-sign-out" style="padding: 5px"> Logout </i></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>

  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'App',
  data () {
    return {
      username: '',
      photo: ''
    }
  },
  created () {
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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a.fa.fa-trash-o.fa-2x {
  color: red;
}

.bg-dark {
  background-color: #403e3b !important;
  border-bottom: 1px solid white;
}

i.fa.fa {
  color: white;
}

li.nav-item:hover {
  color: #2D4FA1;
  border: 1px solid white;
}

.navlogo {
  padding: 5px;
  height: 50px;
  width: 50px;
}

.form-control-label, .form__label, .form-label {
  background-color: #403e3b;
  color: white;
  margin-top: 20px;
}

#__BVID__47__BV_button_ > span {
  font-weight: bold;
  color: white;
}

ul.dropdown-menu.dropdown-menu-right.show {
  background-color: #0288BD;
}

#homePageBG {
  background-color: white;
  padding: 20px;
  width: 40%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 30%;
}

#aboutPageBG {
  background-color: white ;
  width: 50%;
  padding: 20px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 30%;
}

.VueTables.VueTables--client {
  background-color: #f5f5f5;
}

.backText {
  color: white;
  font-weight: bold;
}

</style>
