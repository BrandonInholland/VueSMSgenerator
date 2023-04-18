<template>
    <div class="container">
      <caption>
        <h2 style="white-space: nowrap;">Add a classroom?</h2>
      </caption>
      <div class="add-form">
        <form @submit.prevent="addClassroom">
          <input type="text" v-model="newClassroom.classname" placeholder="Classname">
          <input type="text" v-model="newClassroom.id" placeholder="Class ID">
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="d-flex justify-content-center">
      <table class="table table-dark mx-auto">
        <thead>
          <tr>
            <th scope="col">Classname</th>
            <th scope="col">Class ID</th>
            <th scope="col">Student_ID</th>            
          </tr>
        </thead>
        <tbody>
          <tr class="table-row" v-for="classroom in classrooms">
            <td class="table-cell">{{ classroom.classname }}</td>
            <td class="table-cell">{{ classroom.id }}</td>
            <td>{{ classroom.student.join(', ') }}</td>            
          </tr>
        </tbody>
      </table>
    </div>
  </div>
      
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        classrooms: [],
        newClassroom: {
          classname: '',
          id: ''
        }
      };
    },
    mounted() {
      this.fetchClassrooms();
      setInterval(() => {
        this.fetchClassrooms();
      }, 5000); // reload every 5 seconds
    },
    methods: {
      addClassroom() {
        axios
          .post("http://localhost:8000/api/classrooms", this.newClassroom)
          .then(response => {
            this.classrooms.push(response.data);
            this.newClassroom = { classname: '', id: '' };
          })
          .catch(error => {
            console.error(error);
          });
      },
      fetchClassrooms() {
        axios
          .get("http://localhost:8000/api/classrooms")
          .then(response => {
            this.classrooms = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>