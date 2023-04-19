import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import lecturerEmail from '../components/MessageWithLecturerMail.vue';
import MessageItem from '../components/MessageItem.vue';
import GetAllClasses from '../components/GetAllClasses.vue';
import AddClasses from '../components/AddClasses.vue';
import AddLecturer from '../components/AddLecturer.vue';
import GetAllLecturers from '../components/GetAllLecturers.vue';
import AddStudent from '../components/AddStudent.vue';
import GetStudent from '../components/GetStudentById.vue';
import DeleteStudent from '../components/StudentSoftDelete.vue';
import FrontPage from '../components/FrontPage.vue';
import sendMessage from '../components/SendMessage.vue';



const routes = [
  { path: '/', component: Home },
  { path: '/frontpage', component: FrontPage },
  { path: '/getbymessageid', component: MessageItem },
  { path: '/messageWithlecturermail', component: lecturerEmail },
  { path: '/getallclasses', component: GetAllClasses },
  { path: '/addclasses', component: AddClasses },  
  { path: '/AddLecturer', component: AddLecturer },
  { path: '/getalllecturers', component: GetAllLecturers },
  { path: '/addstudent', component: AddStudent }, 
  { path: '/getstudent', component: GetStudent }, 
  { path: '/deletestudent', component: DeleteStudent }, 
  { path: '/sendMessage', component: sendMessage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export default router