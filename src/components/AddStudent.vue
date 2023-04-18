<template>
    <div class="container">
      <caption>
        <h2 style="white-space: nowrap;">Add a Student</h2>
      </caption>
      <div class="add-form">
        <form @submit.prevent="addStudent">
          <input type="text" v-model="newStudent.fname" placeholder="First Name">
          <input type="text" v-model="newStudent.lname" placeholder="Last Name">
          <input type="text" v-model="newStudent.email" placeholder="Email">
          <input type="number" v-model="newStudent.classroom_id" placeholder="Classroom ID">
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="d-flex justify-content-center">
        <table class="table table-dark mx-auto">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Classroom ID</th>            
            </tr>
          </thead>
          <tbody>
            <tr class="table-row" v-for="student in students">
              <td class="table-cell">{{ student.fname }}</td>
              <td class="table-cell">{{ student.lname }}</td>
              <td class="table-cell">{{ student.email }}</td>
              <td class="table-cell">{{ student.classroom_id }}</td>            
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
        students: [],
        newStudent: {
          classroom_id: '',
          email: '',
          fname: '',
          lname: '',
        }
      };
    },
    mounted() {
      this.fetchStudents();
      setInterval(() => {
        this.fetchStudents();
      }, 5000); // reload every 5 seconds
    },
    methods: {
      addStudent() {
        axios
          .post("http://localhost:8000/api/student", this.newStudent)
          .then(response => {
            this.students.push(response.data);
            this.newStudent = {classroom_id: '',email: '', fname: '', lname: ''};
          })
          .catch(error => {
            console.error(error);
          });
      },
      fetchStudents() {
        axios
          .get("http://localhost:8000/api/student")
          .then(response => {
            this.students = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script> 