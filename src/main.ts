import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

const app = createApp(App)
  .use(router)

router.isReady().then(() => {
  app.mount('#app')
})
