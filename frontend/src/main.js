import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
// import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App)

// app.use(router)
app.use(vuetify)

app.mount('#app')
