<template>
    <div class="container">
      <caption>
        <h2 style="white-space: nowrap;">Delete a Student</h2>
      </caption>
      <div class="add-form">
        <form @submit.prevent="deleteStudent">
          <input type="number" v-model="studentId" placeholder="Student ID">
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        studentId: '',
      };
    },
    methods: {
      deleteStudent() {
        axios
          .put(`http://localhost:8000/api/student/delete/${this.studentId}`)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>
  