import User from './components/user/User.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'
import Component3 from './components/Component3.vue'

export const routes = [
  { path: '', component: Home},
  { path: '/user', component: User },
  { path: '/header', component: Header},
  { path: '/component1', component: Component1},
  { path: '/component2', name: 'goals', component: Component2},
  { path: '/component3', component: Component3}
];
