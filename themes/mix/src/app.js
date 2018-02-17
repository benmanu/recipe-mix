import Vue from 'vue';
// import Notification from './components/Notification.vue';

new Vue({
  el: '#app',
  components: {
    'v-notification': () => import('./components/Notification.vue'),
    'v-heading': () => import('./components/Heading.vue'),
  },
});
