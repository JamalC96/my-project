<template>
  <div class="hero">
    <div>
      <b-card
        title="Barbers"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <b-button to="addbooking" variant="primary">Book Appointment </b-button>
      </b-card>

    </div>

    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>Book an appointment now !!</i></b>
          <p>View your appointments <a href ="/bookings">here</a></p>
          <p>or book an appointment</p>
          <b-btn to="addbooking">Book Now</b-btn>

        </td>
        <td>
          <img src="../assets/barber.gif" alt="description here" height="375" width="375" />
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
