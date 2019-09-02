import Vue from 'vue'
import app from './App.vue'
import { Header } from 'mint-ui'

import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'

Vue.component(Header.name,Header)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(app)
})
