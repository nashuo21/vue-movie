import Vue from "vue";
import Router from "vue-router";
// import movieRouter from "./movie";
// import cinemaRouter from "./cinema";
// import mineRouter from "./mine";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // movieRouter,
    // cinemaRouter,
    // mineRouter

    //movie
    {
      path: "/movie",
      name: "movie",
      component: () => import("@/views/Movie"),
      children: [
        {
          path: "city",
          name: "city",
          component: () => import("@/components/City")
        },
        {
          path: "hot",
          name: "hot",
          component: () => import("@/components/Hot")
        },
        {
          path: "new",
          name: "new",
          component: () => import("@/components/New")
        },
        {
          path: "search",
          name: "search",
          component: () => import("@/components/Search")
        },
        {
          path: "detail/1/:movieId",
          name: "detail",
          components: {
            default: () => import("@/components/Hot"),
            detail: () => import("@/views/Movie/detail")
          },
          props: {
            detail: true
          }
        },
        {
          path: "detail/2/:movieId",
          name: "detail",
          components: {
            default: () => import("@/components/New"),
            detail: () => import("@/views/Movie/detail")
          },
          props: {
            detail: true
          }
        },
        {
          path: "/movie",
          redirect: "/movie/hot"
        }
      ]
    },
    //cinema
    {
      path: "/cinema",
      name: "cinema",
      component: () => import("@/views/Cinema"),
      children: [
        {
          path: "all",
          name: "all",
          component: () => import("@/components/All")
        },
        {
          path: "bland",
          name: "bland",
          component: () => import("@/components/Bland")
        },
        {
          path: "special",
          name: "special",
          component: () => import("@/components/Special")
        },
        {
          path: "/cinema",
          redirect: "/cinema/all"
        }
      ]
    },
    //mine
    {
      path: "/mine",
      name: "mine",
      component: () => import("@/views/Mine")
    },
    //login
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/Login")
    },
    {
      // 重定向，默认url。
      path: "/*",
      redirect: "/movie/hot"
    }
  ]
});
