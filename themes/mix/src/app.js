import 'babel-polyfill';
import 'classlist-polyfill';
import 'isomorphic-fetch';
import Vue from 'vue';

new Vue({
  el: '#app',
  components: {
    'v-notification': () => import('./components/Notification.vue'),
    'v-heading': () => import('./components/Heading.vue'),
  },
});
