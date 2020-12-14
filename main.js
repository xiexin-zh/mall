import Vue from 'vue'
import App from './App'
import { myRequest } from './utils/request.js'
import uView from 'uview-ui'

Vue.config.productionTip = false
Vue.prototype.$myRequest = myRequest
Vue.use(uView)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
