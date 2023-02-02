<template>
  <div class="container">
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
  <router-link to="/AddClasses">
      <button class="add-button">Add Classroom</button>
    </router-link>
</template>
<style scoped>
.container {
  margin: 20px auto;
  text-align: center;
}
  .message-table-container {
    margin-top: 20px;
    display: inline-block;
  }
  .message-table {
  border-collapse: collapse;
  width: 100%;
  border-radius: 5px;
}

  .table-header {
  background-color: #0078D7;
  color: white;
}

  .table-header th {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
}
  .table-row td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  .no-message {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
  }
</style>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      classrooms: []
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
    }
  }
};
</script>



