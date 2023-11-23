import { createRouter, createWebHistory } from "vue-router";

const LoginView = () => import("../views/Auth/LoginView.vue");
const RegisterView = () => import("../views/Auth/RegisterView.vue");


const DashboardView = () => import("../views/Dashboard/DashboardView.vue");
const EmployeesView = () => import("../views/Dashboard/EmployeesView.vue");

const routes = [

  {
    path: "/",
    component: LoginView,
  },
  {
    path: "/register",
    component: RegisterView,
  },
  {
    path: "/dashboard",
    component: DashboardView,
  },{
    path: "/dashboard/employees",
      component: EmployeesView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
