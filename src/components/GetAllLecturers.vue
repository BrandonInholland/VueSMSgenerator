<template>
    <div class="container">
        <h2 style="white-space: nowrap;">List of Lecturers</h2>
        <div class="d-flex justify-content-center">
            <table class="table table-dark mx-auto">
                <thead>
                    <tr>
                        <th scope="col">Lecturer First Name</th>
                        <th scope="col">Lecturer Last Name</th>
                        <th scope="col">Lecturer Email</th>
                        <th scope="col">Class</th>

                    </tr>
                </thead>
                <tbody>
                    <tr class="table-row" v-for="lects in lecturer">
                        <td class="table-cell">{{ lects.first_name }}</td>
                        <td class="table-cell">{{ lects.last_name }}</td>
                        <td class="table-cell">{{ lects.email }}</td>
                        <td>{{ lects.classroom.join(', ') }}</td>
                        <td class="table-cell">
              <button class="btn btn-danger" @click="deleteLecturer(lects.first_name)">Delete</button>
            </td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center">
      <a class="btn btn-primary" href="AddLecturer" role="button">Add Lecturer?</a>
    </div>
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
import axios from 'axios';
export default {
    data() {
        return {
            lecturer: [],
            
        }
    },
    mounted() {
        this.fetchLecturers();
        setInterval(() => {
            this.fetchLecturers();
        }, 5000); // reload every 5 seconds
    },
    methods: {
        
        fetchLecturers() {
            axios
                .get("http://localhost:8000/api/lecturer")
                .then(response => {
                    this.lecturer = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        deleteLecturer(first_name) {
      axios
        .delete("http://localhost:8000/api/lecturer/" + first_name)
        .then(response => {
          console.log(response);
          this.fetchLecturers();
        })
        .catch(error => {
          console.error(error);
        });
    }
    }
}
</script>