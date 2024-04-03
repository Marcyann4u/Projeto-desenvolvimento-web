import './assets/main.css';

// Import createApp from Vue
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

// Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(fas);

// Create the Vue app instance using createApp
const app = createApp(App);

// Register Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.mount('#app');
