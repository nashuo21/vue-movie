import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./stores";
import axios from "axios";
import Scroller from "@/components/Scroller";
import Loading from "@/components/Loading";

/*注册全局通用组件*/

//滚动，上拉刷新，下拉加载更多
Vue.component("Scroller", Scroller);
//等待加载
Vue.component("Loading", Loading);
//注册axios
Vue.prototype.axios = axios;

Vue.config.productionTip = false;

/*全局过滤器*/
//setWH替换url中的图片宽高
Vue.filter("setWH", (url, arg) => {
  return url.replace(/w\.h/, arg);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
