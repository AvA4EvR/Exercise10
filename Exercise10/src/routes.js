import User from './components/user/User.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

export const routes = [
  { path: '', component: Home},
  { path: '/user', component: User },
  { path: '/headeer', component: Header}
];
