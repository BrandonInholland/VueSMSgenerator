<template>
    <div class="container">
      <div class="message-table-container" v-if="messages.length > 0">
        <table class="message-table">
          <tr class="table-header">
            <th>ID</th>
            <th>Lecturer Email</th>
            <th>Reciepent</th>
            <th>Message</th>
          </tr>
          <tr class="table-row" v-for="message in messages">
            <td class="table-cell">{{ message.messageID }}</td>
            <td class="table-cell">{{ message.lecturerEmail }}</td>
            <td class="table-cell">{{ message.to }}</td>
            <td class="table-cell">{{ message.content }}</td>
            
          </tr>
        </table>
      </div>
      <div v-else class="no-message">No messages found.</div>
    </div>
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
        messages: []
      };
    },
    mounted() {
      this.fetchMessages();
      setInterval(() => {
        this.fetchMessages();
      }, 5000); // reload every 5 seconds
    },
    methods: {
      fetchMessages() {
        axios
          .get("http://localhost:8080/messages")
          .then(response => {
            this.messages = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>