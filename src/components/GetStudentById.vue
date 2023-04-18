<template>
    <div class="container">
      <input type="number" v-model="studentId" placeholder="Enter Student ID">
      <button @click.prevent="getStudentById(studentId)" class="btn btn-primary">Get Student</button>
      <div v-if="student">
        <h2>{{ student.fname }} {{ student.lname }}</h2>
        <p>Email: {{ student.email }}</p>
        <p>Classroom ID: {{ student.classroom_id }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        studentId: '',
        student: null
      };
    },
    methods: {
      getStudentById(id) {
        axios
          .get(`http://localhost:8000/api/student/${id}`)
          .then(response => {
            this.student = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  