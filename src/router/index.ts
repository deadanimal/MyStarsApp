import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // // DEFAULT LAYOUT
  // {
  //   path: "",
  //   redirect: "/login",
  //   component: () => import("@/layouts/default.vue"),
  //   children: [
  //     {
  //       path: "/home",
  //       component: () => import("@/views/home.vue"),
  //     },
  //     {
  //       path: "/about",
  //       component: () => import("@/views/about.vue"),
  //     },
  //     {
  //       path: "/dashboard",
  //       component: () => import("@/views/dashboard.vue"),
  //     },      
  //   ],
  // },

  {
    path: "/brand",
    redirect: "/login",
    component: () => import("@/layouts/brand.vue"),
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/brand/dashboard.vue"),
      }, 
      {
        path: "briefs",
        component: () => import("@/views/brand/briefs.vue"),
      },    
      {
        path: "chat",
        component: () => import("@/views/brand/chat.vue"),
      },               
      {
        path: "profile",
        component: () => import("@/views/brand/profile.vue"),
      },           
    ],
  },  

  {
    path: "/creator",
    redirect: "/login",
    component: () => import("@/layouts/creator.vue"),
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/creator/dashboard.vue"),
      }, 
      {
        path: "explore",
        component: () => import("@/views/creator/explore.vue"),
      },    
      {
        path: "contents",
        component: () => import("@/views/creator/contents.vue"),
      },               
      {
        path: "profile",
        component: () => import("@/views/creator/profile.vue"),
      },           
    ],
  },  

  // BLANK LAYOUT
  {
    path: "",
    component: () => import("@/layouts/blank.vue"),
    children: [
      {
        path: "/login",
        component: () => import("@/views/login.vue"),
      },
      {
        path: "/register",
        component: () => import("@/views/register.vue"),
      },
      {
        path: "/:username",
        component: () => import("@/views/landing.vue"),
      },      
    ],
  },

  // NOT FOUND
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
