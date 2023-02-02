<template>
    <nav class="navigation">
      <router-link to="/getallclasses">Get All Classes</router-link>
      <router-link to="/addclasses">Add Classroom</router-link>
    </nav>
  </template>
  
  <style>
    .navigation {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      background-color: #0078D7;
    }
    .navigation a {
      color: white;
      text-decoration: none;
      margin: 0 10px;
      font-size: 18px;
    }
  </style>
  