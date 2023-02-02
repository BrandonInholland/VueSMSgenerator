<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <!-- Add a router link to the homepage (don't use the a tag!) -->
          <router-link to="/" class="nav-link" active-class="active"
            >Home</router-link
          >
        </li>      
        <li class="nav-item">
          <!-- add a router link to the products page (don't use the a tag!) -->
          <router-link to="/getbymessageid" class="nav-link" active-class="active"
            >MessageItem</router-link
          >
        </li>
        <li class="nav-item">
          <!-- add a router link to the products page (don't use the a tag!) -->
          <router-link to="/messageWithlecturermail" class="nav-link" active-class="active"
            >FilterByLecturerMail</router-link
          >
        </li>
        <li class="nav-item">
          <!-- add a router link to the products page (don't use the a tag!) -->
          <router-link to="/getallclasses" class="nav-link" active-class="active"
            >GetAllClasses</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
  }
  .navbar-nav li a {
    color: rgb(13, 6, 6);
    text-decoration: none;
  }
  .nav-link.active {
    background-color: rgb(255, 252, 252);
  }
</style>
