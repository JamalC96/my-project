<template>
  <div>
    <!-- The surrounding HTML is left untouched by FirebaseUI.
       Your app may use that space for branding, controls and other customizations.-->
    <h1>Login</h1>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'

export default {
  name: 'GoogleLogin',

  mounted () {
    var ui = new firebaseui.auth.AuthUI(firebase.auth())

    var uiConfig = {
      signInSuccessUrl: '/', // This redirect can be achived by route using callback.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID

      ]
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}

</script>

<style scoped>
  .firebaseui-container {
    background-color: #fff;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    color: rgba(0, 0, 0, 0.87);
    direction: ltr;
    font: 16px Roboto, arial, sans-serif;
    margin: 0 auto;
    max-width: 360px;
    /** This is needed for the invisible reCAPTCHA badge to show. */
    overflow: visible;
    position: relative;
    text-align: left;
    width: 100%;
  }
</style>
