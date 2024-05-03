import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
import '@/assets/css/main.css'
import { Button,NavBar,Tabbar,TabbarItem,Checkbox,Toast,Icon} from 'vant'
import '@/utils/rem'


const app = createApp(App)
app.use(Button)
app.use(NavBar)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Checkbox)
app.use(Toast)
app.use(Icon)
app.use(createPinia())
app.use(router)
app.mount('#app')
