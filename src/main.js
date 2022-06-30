import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Button, Form, FormItem, Input } from 'element-ui';
import './assets/global.less'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueAxios, axios)

Vue.component(Button.name, Button);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
// Vue.component(Message.name, Message);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
