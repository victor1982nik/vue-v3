import { createRouter, createWebHistory } from "vue-router";
///import ErrorPage from "./pages/ErrorPage";
const HomePage = () => import("./pages/HomePage");
const LoginPage = () => import("./pages/LoginPage");
const Apartment = () => import("./pages/ApartmentPage");
const RegistrationPage = () => import("./pages/RegistrationPage");
const MyOrdersPage = () => import("./pages/MyOrders");

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/apartments/:id",
    component: Apartment,
    name: "apartment",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration-page",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/my-orders",
    component: MyOrdersPage,
    name: "my-orders",
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
