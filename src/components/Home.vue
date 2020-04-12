<template>
  <div class="hero">
    <div align="center">
      <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
          <div class="searchbar">
            <input class="search_input" type="text" name="" placeholder="Search...">
            <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
          </div>
        </div>
      </div>
      <div>

        <b-button to="login" variant="primary" style="margin-top: 150px;">Book Appointment</b-button>

      </div>

    </div>

  </div>
</template>

<style>

  .searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
  }

  .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
  }

  .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 450px;
    caret-color:red;
    transition: width 0.4s linear;
  }

  .searchbar:hover > .search_icon{
    background: black;
    color: #e74c3c;
  }

  .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    text-decoration:none;
  }
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

  .btn-primary {
    background-color: #37e25e;
    border-color: black;
  }

  .card {
    background-color: #212529;
  }

  /* Main Footer */
  footer .main-footer {
    padding: 20px 0;
    background: #252525;
  }

  footer ul {
    padding-left: 0;
    list-style: none;
  }

  /* Copy Right Footer */
  .footer-copyright {
    background: #222;
    padding: 5px 0;
  }

  .footer-copyright .logo {
    display: inherit;
  }

  .footer-copyright nav {
    float: right;
    margin-top: 5px;
  }

  .footer-copyright nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .footer-copyright nav ul li {
    border-left: 1px solid #505050;
    display: inline-block;
    line-height: 12px;
    margin: 0;
    padding: 0 8px;
  }

  .footer-copyright nav ul li a {
    color: #969696;
  }

  .footer-copyright nav ul li:first-child {
    border: medium none;
    padding-left: 0;
  }

  .footer-copyright p {
    color: #969696;
    margin: 2px 0 0;
  }

  /* Footer Top */
  .footer-top {
    background: #252525;
    padding-bottom: 30px;
    margin-bottom: 30px;
    border-bottom: 3px solid #222;
  }

  /* Footer transparent */
  footer.transparent .footer-top, footer.transparent .main-footer {
    background: transparent;
  }

  footer.transparent .footer-copyright {
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3);
  }

  /* Footer light */
  footer.light .footer-top {
    background: #f9f9f9;
  }

  footer.light .main-footer {
    background: #f9f9f9;
  }

  footer.light .footer-copyright {
    background: none repeat scroll 0 0 rgba(255, 255, 255, 0.3);
  }

  /* Footer 4 */
  .footer- .logo {
    display: inline-block;
  }

  /*====================
    Widgets
  ====================== */
  .widget {
    padding: 20px;
    margin-bottom: 40px;
  }

  .widget.widget-last {
    margin-bottom: 0px;
  }

  .widget.no-box {
    padding: 0;
    background-color: transparent;
    margin-bottom: 40px;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
  }

  .widget.subscribe p {
    margin-bottom: 18px;
  }

  .widget li a {
    color: #ff8d1e;
  }

  .widget li a:hover {
    color: #4b92dc;
  }

  .widget-title {
    margin-bottom: 20px;
  }

  .widget-title span {
    background: #839FAD none repeat scroll 0 0;
    display: block;
    height: 1px;
    margin-top: 25px;
    position: relative;
    width: 20%;
  }

  .widget-title span::after {
    background: inherit;
    content: "";
    height: inherit;
    position: absolute;
    top: -4px;
    width: 50%;
  }

  .widget-title.text-center span, .widget-title.text-center span::after {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  .widget .badge {
    float: right;
    background: #7f7f7f;
  }

  .typo-light h1,
  .typo-light h2,
  .typo-light h3,
  .typo-light h4,
  .typo-light h5,
  .typo-light h6,
  .typo-light p,
  .typo-light div,
  .typo-light span,
  .typo-light small {
    color: #fff;
  }

  ul.social-footer2 {
    margin: 0;
    padding: 0;
    width: auto;
  }

  ul.social-footer2 li {
    display: inline-block;
    padding: 0;
  }

  ul.social-footer2 li a:hover {
    background-color: #ff8d1e;
  }

  ul.social-footer2 li a {
    display: block;
    height: 30px;
    width: 30px;
    text-align: center;
  }

  .btn {
    background-color: #ff8d1e;
    color: #fff;
  }

  .btn:hover, .btn:focus, .btn.active {
    background: #4b92dc;
    color: #fff;
    -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -ms-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -o-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -webkit-transition: all 250ms ease-in-out 0s;
    -moz-transition: all 250ms ease-in-out 0s;
    -ms-transition: all 250ms ease-in-out 0s;
    -o-transition: all 250ms ease-in-out 0s;
    transition: all 250ms ease-in-out 0s;

  }
  .card
  {
    border-radius: 20px;
  }

  .card-img-top
  {
    border-radius: 10px;
  }

</style>
