import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

const options = {
  timeout: 3000, 
  position: 'bottom-right', 
  transition: 'VueToastificationFade', 
  maxToasts: 5,          
  newestOnTop: true,      
  icon: true,             
  closeOnClick: true,     
  pauseOnHover: true,     
  hideProgressBar: false, 
  closeOnClick: true,     
  closeOnSwipe: true,     
  pauseOnFocusLoss: true, 
  bodyClassName: 'custom-toast-body', 
};

app.use(router);
app.use(Toast, options);

app.mount('#app');
