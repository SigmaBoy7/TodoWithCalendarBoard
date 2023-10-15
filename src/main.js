import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import components from '@/components/UI';
import { createPinia } from 'pinia'
import './assets/tailwind.css'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const pinia = createPinia()
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(pinia)
    .use(router)
    .use(VCalendar, {})
    .mount('#app');