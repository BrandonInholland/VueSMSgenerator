<template>
  <div>
    <form>
      <input v-model="messageID" type="text" placeholder="Enter message ID">
      <button @click="fetchMessage">Fetch Message</button>
    </form>
    <table v-if="message" class="message-table">
      <tr>
        <td class="message-item-label">ID:</td>
        <td class="message-item-value">{{ message.messageID }}</td>
      </tr>
      <tr>
        <td class="message-item-label">Lecturer Email:</td>
        <td class="message-item-value">{{ message.lecturerEmail}}</td>
      </tr>
      <tr>
        <td class="message-item-label">Recipient:</td>
        <td class="message-item-value">{{ message.to }}</td>
      </tr>
      <tr>
        <td class="message-item-label">Content:</td>
        <td class="message-item-value">{{ message.content }}</td>
      </tr>
    </table>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      messageID: '',
      message: JSON.parse(localStorage.getItem('message')) || null,
      error: null,
    };
  },
  methods: {
    async fetchMessage() {
      try {
        const response = await axios.get(`http://localhost:8080/messages/${this.messageID}`);
        this.message = response.data;
        localStorage.setItem('message', JSON.stringify(this.message));
      } catch (err) {
        this.error = 'Error fetching message';
      }
    },
  },
};
</script>
<style>
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }

  input {
    width: 200px;
    height: 35px;
    padding: 0 10px;
    margin-right: 10px;
  }

  button {
    width: 100px;    
    background-color: dodgerblue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .message-table {
    margin: 20px auto;
    width: 60%;
    border-collapse: collapse;
  }

  .message-item-label {
    font-weight: bold;
    padding: 10px;
    background-color: lightgray;
    text-align: left;
  }

  .message-item-value {
    padding: 10px;
    background-color: white;
    text-align: left;
  }
</style>
