<template>
  <div>
    <input type="text" v-model="lecturerEmail" />
    <button @click="fetchMessagesByLecturerEmail">Get Messages</button>
    <table v-if="messages.length">
      <thead>
        <tr>
          <th>Message ID</th>
          <th>Lecturer Email</th>
          <th>To Email</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="message in messages" :key="message.MessageID">
          <td style="color: black;">{{ message.messageID }}</td>
          <td style="color: black;">{{ message.lecturerEmail }}</td>
          <td style="color: black;">{{ message.to }}</td>
          <td style="color: black;">{{ message.content }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      lecturerEmail: "",
      messages: []
    };
  },
  methods: {
    async fetchMessagesByLecturerEmail() {
      try {
        const response = await axios.get(`http://localhost:8080/messages/lecturer/${this.lecturerEmail}`);
        this.messages = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #ddd;
  }
  input[type="text"] {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 300px;
  }
  
</style>

