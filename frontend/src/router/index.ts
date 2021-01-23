import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import AuthorView from "@/views/author/AuthorView.vue";
import AuthorsView from "@/views/author/AuthorsView.vue";
import EditAuthorView from "@/views/author/EditAuthorView.vue";
import BooksView from "@/views/book/BooksView.vue";
import EditBookView from "@/views/book/EditBookView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import UserView from "@/views/user/UserView.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UsersView from "@/views/user/UsersView.vue";
import UserEditView from "@/views/user/UserEditView.vue";
import BookView from "@/views/book/BookView.vue";
import ShelvesView from "@/views/shelf/ShelvesView.vue";
import ShelfView from "@/views/shelf/ShelfView.vue";
import EditShelfView from "@/views/shelf/EditShelfView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AccessDeniedView from "@/views/AccessDeniedView.vue";
import CurrentUserView from "@/views/user/CurrentUserView.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'CurrentUserView',
    component: CurrentUserView,
  },
  {
    name: 'UsersView',
    path: '/user/all',
    component: UsersView,
  },
  {
    name: 'UserRegisterView',
    path: '/user/register',
    component: UserRegisterView,
  },
  {
    name: 'UserLoginView',
    path: '/user/login',
    component: UserLoginView,
  },
  {
    path: '/user/:id/edit',
    name: 'UserEditView',
    component: UserEditView,
  },
  {
    path: '/user/:id',
    name: 'UserView',
    component: UserView,
  },
  {
    path: '/shelf',
    name: 'ShelfDefaultView',
    component: ShelvesView,
  },
  {
    path: '/shelf/all',
    name: 'ShelvesView',
    component: ShelvesView,
  },
  {
    path: '/shelf/add',
    name: 'AddShelfView',
    component: EditShelfView,
  },
  {
    path: '/shelf/:id/edit',
    name: 'EditShelfView',
    component: EditShelfView,
  },
  {
    path: '/shelf/:id',
    name: 'ShelfView',
    component: ShelfView,
  },
  {
    path: '/book',
    name: 'BooksDefaultView',
    component: BooksView,
  },
  {
    path: '/book/all',
    name: 'BooksView',
    component: BooksView,
  },
  {
    path: '/book/:id/edit',
    name: 'BookEdit',
    component: EditBookView,
  },
  {
    path: '/book/add',
    name: 'BookAdd',
    component: EditBookView,
  },
  {
    path: '/book/:id',
    name: 'BookView',
    component: BookView,
  },
  {
    path: '/author',
    name: 'AuthorDefaultView',
    component: AuthorsView,
  }, {
    path: '/author/all',
    name: 'AuthorsView',
    component: AuthorsView,
  },
  {
    path: '/author/add',
    name: 'AddAuthorView',
    component: EditAuthorView,
  },
  {
    path: '/author/:id',
    name: 'AuthorView',
    component: AuthorView,
  },
  {
    path: '/author/:id/edit',
    name: 'EditAuthorView',
    component: EditAuthorView,
  },
  {
    path: '/*',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/403',
    name: '403',
    component: AccessDeniedView
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
