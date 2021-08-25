
import App from './App.vue'
import { createApp } from "vue";
import router from "./router";
import store from "./store";


//Vue.config.productionTip = false
/*
new Vue({
  render: h => h(App),
}).$mount('#app')
*/
createApp(App).use(store)
  .use(router).mount("#app");
