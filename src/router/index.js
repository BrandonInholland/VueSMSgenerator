import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import lecturerEmail from '../components/MessageWithLecturerMail.vue';
import MessageItem from '../components/MessageItem.vue';
import GetAllClasses from '../components/GetAllClasses.vue';
import AddClasses from '../components/AddClasses.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/getbymessageid', component: MessageItem },
  { path: '/messageWithlecturermail', component: lecturerEmail },
  { path: '/getallclasses', component: GetAllClasses },
  { path: '/addclasses', component: AddClasses },  
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export default router