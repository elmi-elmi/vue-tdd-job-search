import { createRouter, createWebHashHistory } from "vue-router";
const HomeView = () => import("@/views/HomeView.vue");
const JobResults = () =>
  import(/* webpackChunkName: "job" */ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/* webpackChunkName: "job" */ "@/views/JobView.vue");

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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
