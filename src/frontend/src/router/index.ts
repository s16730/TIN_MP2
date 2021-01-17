import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import AuthorBooksView from "@/views/author/AuthorBooksView.vue";
import AuthorView from "@/views/author/AuthorView.vue";
import AuthorsView from "@/views/author/AuthorsView.vue";
import EditAuthorView from "@/views/author/EditAuthorView.vue";
import BooksView from "@/views/book/BooksView.vue";
import AddAuthorView from "@/views/author/AddAuthorView.vue";
import EditBookView from "@/views/book/EditBookView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import UserView from "@/views/user/UserView.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UsersView from "@/views/user/UsersView.vue";
import UserEditView from "@/views/user/UserEditView.vue";
import BookView from "@/views/book/BookView.vue";
import AddBookView from "@/views/book/AddBookView.vue";
import AddShelfView from "@/views/shelf/AddShelfView.vue";
import ShelvesView from "@/views/shelf/ShelvesView.vue";
import ShelfView from "@/views/shelf/ShelfView.vue";
import EditShelfView from "@/views/shelf/EditShelfView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AccessDeniedView from "@/views/AccessDeniedView.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: UsersView,
    children: [
      {
        path: 'all',
        component: UsersView,
      },
      {
        path: 'register',
        component: UserRegisterView,
      },
      {
        path: 'login',
        component: UserLoginView,
      },
      {
        path: ':id/edit',
        component: UserEditView,
      },
      {
        path: ':id',
        component: UserView,
      },
    ]
  },
  {
    path: '/shelf',
    name: 'Shelf',
    component: ShelvesView,
    children: [
      {
        path: 'all',
        component: ShelvesView,
      },
      {
        path: 'add',
        component: AddShelfView,
      },
      {
        path: ':id/edit',
        component: EditShelfView,
      },
      {
        path: ':id',
        component: ShelfView,
      },
    ]
  },
  {
    path: '/book',
    name: 'Book',
    component: BooksView,
    children: [
      {
        path: 'all',
        component: BooksView,
      },
      {
        path: 'add',
        component: AddBookView,
      },
      {
        path: ':id/edit',
        component: EditBookView,
      },
      {
        path: ':id',
        component: BookView,
      },
    ]
  },
  {
    path: '/author',
    name: 'Author',
    component: AuthorsView,
    children: [
      {
        path: 'add',
        component: AddAuthorView,
      },
      {
        path: ':id/edit',
        component: EditAuthorView,
      },
      {
        path: 'all',
        component: AuthorsView,
      },
      {
        path: ':id/books',
        component: AuthorBooksView,
      },
      {
        path: ':id',
        component: AuthorView,
      },
    ]
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
