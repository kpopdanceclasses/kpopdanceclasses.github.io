document.write(`
    <nav class="navbar navbar-expand-md text-end">
  <div class="container-fluid text-end">
    <button class="navbar-toggler text-end"type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation" id="rizzlord">
      <span class="navbar-toggler-icon text-end"></span>
    </button>




    <div class="collapse navbar-collapse text-end" id="navbarTogglerDemo03">
      <ul class="nav-list navbar-nav me-auto mb-2 mb-lg-0 text-end">

        <li class="nav-item text-end">
          <a class="nav-link active" aria-current="page" href="home.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about-trend">
          About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#page-links">
          Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
    <!--                navbar menu-->

    <div class="logo-box">
      <!--  
                        logo-->
    </div>
    <div class="offcanvas offcanvas-end d-md-none text-end" tabindex="-1" id="offcanvasDarkNavbar"
         aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <div class="offcanvas-title" id="offcanvasDarkNavbarLabel">
          <img src="assets/img/logo.svg" alt="">
        </div>
        <button type="button" class="btn-close btn-close" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="home.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about-trend">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#page-links">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">
              Contact
            </a>
          </li>
          <li class="nav-item">
            &nbsp;
          </li>
         
        </ul>
      </div>
    </div>

  </div>

</nav>

<script>
$(function () {
    $(".ham-menu input").bind('click', function () {
        console.log('click');
        $('this').toggleClass('active-btn');
        $('.nav-list').toggleClass('active-btn');

    });
});
</script>
`);

