<template>
    <div>
      <form @submit.prevent="sendMessage">
        <div>
          <label for="from">From:</label>
          <input type="text" id="from" v-model="messagePayload.From">
        </div>
        <div>
          <label for="message">Message:</label>
          <input type="text" id="message" v-model="messagePayload.Message">
        </div>
        <div>
          <label for="to">To:</label>
          <input type="text" id="to" v-model="recipient.Email">
          <button type="button" @click="addRecipient">Add</button>
          <ul>
            <li v-for="(email, index) in messagePayload.To" :key="index">{{ email }}</li>
          </ul>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data () {
      return {
        messagePayload: {
          Message: '',
          From: '',
          To: []
        },
        recipient: {
          Email: ''
        }
      }
    },
    methods: {
      addRecipient () {
        this.messagePayload.To.push(this.recipient)
        this.recipient = { Email: '' }
      },
      sendMessage () {
        axios
          .get('http://localhost:3000/send', {
            params: this.messagePayload
          })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.error(error)
          })
      }
    }
  }
  </script>
  