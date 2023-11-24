import { createApp } from 'vue';
import App from './App.vue';
import router from './router'



const app = createApp(App);
app.use(router);
app.config.globalProperties.$router = router;
app.mount('#app');

