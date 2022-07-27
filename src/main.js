import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIcons  from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
    button: { autoInsertSpace: true }
})
app.use(router)
for(const [key,component] of Object.entries(ElementPlusIcons)){
    app.component(key,component)
}

app.mount('#app')
