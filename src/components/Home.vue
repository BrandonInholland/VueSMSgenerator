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
 

<!-- GetByLecturerEmail -->

  <div class="message-list">
    <ul>
      <li v-for="message in messages" :key="message.MessageID">
        <div class="message-item">
          <div class="message-content">{{ message.Content }}</div>
          <div class="message-details">
            <div class="message-to">{{ message.to }}</div>
            <div class="message-lecturer">{{ message.LecturerEmail }}</div>     
          </div>
        </div>
      </li>
    </ul>
  </div>

  <!-- GetByMessageID -->
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

  <!-- MessageWithLecturerMail -->
  <div>
    <input type="text" v-bind:value="lecturerEmail" v-on:input="$emit('update:lecturerEmail', $event.target.value)">

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

    .message-list {
    width: 80%;
    margin: 0 auto;
  }
  
  .message-item {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
  }
  
  .message-content {
    font-size: 18px;
  }
  
  .message-details {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .message-lecturer,
  .message-to {
    font-size: 14px;
    color: #333;
  }
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
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        lecturerEmail: "",
        messages: []
      };
    },
    mounted() {
      this.fetchMessages();
      setInterval(() => {
        this.fetchMessages();
      }, 5000); // reload every 5 seconds
    },
    created() {
      axios
        .get('/api/message/lecturer/' + this.lecturerEmail)
        .then(response => {
          this.messages = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    props: ['lecturerEmail'],
  
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
      },
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