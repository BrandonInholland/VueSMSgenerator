<template>
    <div class="container">
      <div class="add-form">
        <form @submit.prevent="addClassroom">
          <input type="text" v-model="newClassroom.classname" placeholder="Classname">
          <input type="text" v-model="newClassroom.id" placeholder="Class ID">
          <button type="submit">Add Classroom</button>
        </form>
      </div>
      <div class="message-table-container" v-if="classrooms.length > 0">
        <table class="message-table">
          <tr class="table-header">
            <th>Classname</th>
            <th>Class ID</th>
            <th>Student_id</th>
          </tr>
          <tr class="table-row" v-for="classroom in classrooms">
            <td class="table-cell">{{ classroom.classname }}</td>
            <td class="table-cell">{{ classroom.id }}</td>
            <!-- <td class="table-cell">{{ classroom.student.id }}</td> -->
            <td>{{ classroom.student.join(', ') }}</td>
          </tr>
        </table>
      </div>
      <div v-else class="no-message">No messages found.</div>
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