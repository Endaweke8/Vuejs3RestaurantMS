import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import '/src/index.css'
import VueSweetalert2 from 'vue-sweetalert2';

const app = createApp(App)

app.use(router)
.use(VueSweetalert2)
app.mount('#app')
