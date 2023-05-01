import './bootstrap';
import { createApp } from 'vue';

window.Vue = require('vue').default;
const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

import App from './components/App.vue';
app.mount('#app');
// require('./bootstrap');
