require('./bootstrap');

import { createApp } from 'vue';
import BookList from './components/BookList.vue';

createApp({
    components: {
        BookList,
    }
}).mount('#app');
