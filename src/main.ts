import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

declare global {
  interface Window {
    mountRed: Function
    unmountRed: Function
  }
}

window.mountRed = (containerId: string) => {
  createApp(App).use(router).mount(`#${containerId}`)
}

window.unmountRed = (containerId: string) => {
  const container = document.getElementById(`#${containerId}`)

  if (container) document.removeChild(container)
}
