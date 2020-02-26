<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">BQuick</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/bookings"><i class="fa fa-list" style="padding: 5px"> Manage Bookings</i></b-nav-item>
          <b-nav-item v-show="user" to="/addbooking"><i class="fa fa-bookmark" style="padding: 5px"> Make a booking</i></b-nav-item>

        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/register"><i class="fa fa-id-card" aria-hidden="true" style="padding: 5px"> For Business</i></b-nav-item>
          <b-nav-item v-if="photo"><img :src="photo" style="width: 35px; height: 35px" class="photo" /></b-nav-item>
          <b-nav-item to="/login" v-else><i class="fa fa-user-circle-o" style="padding: 5px"> Login </i></b-nav-item>
          <b-nav-item v-show="user" ><i class="fa fa-sign-out" style="padding: 5px"  @click="logout()"> Logout </i></b-nav-item>
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
  },
  methods:
    {
      logout (e) {
        e.stopPropagation()
        firebase.auth().signOut()
          .then(() => {
            this.$router.replace({
              name: 'Booking'
            })
          })
      }
    }
}
</script>

<style>

  body{
    background-image: url("assets/city1.jpg" );
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    right: 0;
    margin:0;
    padding:0;

  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

}

a.fa.fa-trash-o.fa-2x {
  color: red;
}

.bg-dark {
  background-color: #252525 !important;
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
  color: white;
  margin-top: 20px;
}

#__BVID__47__BV_button_ > span {
  font-weight: bold;
  color: white;
}

.photo
{
  border-radius: 50%;
}

.navbar-dark .navbar-brand
{
  color: #ff8d1e;
}

  i.fa.fa:hover
  {
    color: #ff8d1e;
  }

  .table
  {
    color: white;
  }

</style>
