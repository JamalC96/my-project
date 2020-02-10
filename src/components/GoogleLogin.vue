<template>
  <div>
    <!-- The surrounding HTML is left untouched by FirebaseUI.
       Your app may use that space for branding, controls and other customizations.-->
    <h1>Welcome to My Awesome App</h1>
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

</style>
