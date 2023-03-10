import { createRouter, createWebHashHistory } from "vue-router";
const HomeView = () => import("@/views/HomeView.vue");
const JobResults = () =>
  import(/* webpackChunkName: "job" */ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/* webpackChunkName: "job" */ "@/views/JobView.vue");
const TeamsView = () => import("@/views/TeamsView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/job/results",
    name: "JobResults",
    component: JobResults,
  },
  {
    path: "/job/results/:id",
    name: "JobView",
    component: JobView,
  },
  {
    path: "/teams",
    name: "Tea,sView",
    component: TeamsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
