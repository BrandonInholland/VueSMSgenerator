<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid d-flex justify-content-between">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-header">SMS Generator</router-link>
        </li>  
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">Message Home</router-link>
        </li>      
        <li class="nav-item">
          <router-link to="/getbymessageid" class="nav-link" active-class="active">Message Item</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/messageWithlecturermail" class="nav-link" active-class="active">FilterByLecturerMail</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/getallclasses" class="nav-link" active-class="active">GetAllClasses</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
    background-color: blue;
  }
  .navbar-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .navbar-nav li {
    list-style: none;
    margin-right: 10px;
  }
  .navbar-nav li .nav-header {
    font-size: 24px;
    color: orange;
    font-weight: bold;
    text-decoration: none;
  }
  .navbar-nav li a {
    color: rgb(252, 251, 251);
    text-decoration: none;
  }
  .nav-link.active {
    background-color: rgb(255, 0, 252);
  }
</style>