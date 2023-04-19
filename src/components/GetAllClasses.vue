<template>
  <div class="container">
    <h2 style="white-space: nowrap;">List of Classrooms</h2>
    <div class="d-flex justify-content-center">
      <table class="table table-dark mx-auto">
        <thead>
          <tr>
            <th scope="col">Classname</th>
            <th scope="col">Class ID</th>
            <th scope="col">Student_ID</th>
            <th scope="col">Delete?</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-row" v-for="classroom in classrooms">
            <td class="table-cell">{{ classroom.classname }}</td>
            <td class="table-cell">{{ classroom.id }}</td>
            <td>{{ classroom.student.join(', ') }}</td>
            <td class="table-cell">
              <button class="btn btn-danger" @click="deleteClassroom(classroom.classname)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
   
  </div>

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
      
  </div>
</template>

<style scoped>

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      classrooms: [
        { id: 2, classname: 'IT', student: ['John Doe', 'Jane Smith'] },
        { id: 3, classname: 'IT', student: ['Bob Johnson', 'Alice Williams'] },
        { id: 4, classname: 'IT', student: ['Mike Brown', 'Mary Davis'] },
      ],
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
    fetchClassrooms() {
      axios
        .get("http://localhost:8000/api/classrooms")
        .then(response => {
          this.classrooms = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
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


    deleteClassroom(classname) {
      axios
        .delete("http://localhost:8000/api/classrooms/" + classname)
        .then(response => {
          console.log(response);
          this.fetchClassrooms();
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
};
</script>



