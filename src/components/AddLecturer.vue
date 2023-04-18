<template>
    <div class="container">
        <caption>
            <h2 style="white-space: nowrap;">Add a Lecturer?</h2>
        </caption>
        <div class="add-form">
            <form @submit.prevent="addLecturer">
                <input type="text" v-model="newLecturer.first_name" placeholder="First Name">
                <input type="text" v-model="newLecturer.last_name" placeholder="Last Name">
                <input type="text" v-model="newLecturer.email" placeholder="Email">
                <select v-model="newLecturer.classrooms">
                    <option v-for="c in classrooms" :value="c.id">{{ c.classname }}</option>
                </select>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
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
                        <td>{{ lects.classroom.classname }}</td>
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
            lecturer: [],
            newLecturer: {
                first_name: '',
                last_name: '',
                email: '',
                classroom: ''
            },
            classrooms:[]
        }
    },
    mounted() {
        this.fetchLecturers();
        setInterval(() => {
            this.fetchLecturers();
        }, 5000); // reload every 5 seconds
    },
    methods: {
        addLecturer() {
            axios
                .post("http://localhost:8000/api/lecturer", this.newLecturer)
                .then(response => {
                    this.lecturer.push(response.data);
                    this.newLecturer = { first_name: '', last_name: '', email: '', classroom:'' };
                })
                .catch(error => {
                    console.error(error);
                });

        },
        fetchLecturers() {
            axios
                .get("http://localhost:8000/api/lecturer")
                .then(response => {
                    this.lecturer = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}
</script>
  