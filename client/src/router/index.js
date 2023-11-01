import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '@/components/User/Index'
import UserEdit from '@/components/User/EditUser'
import UserShow from '@/components/User/ShowUser'
import UserCreate from '@/components/User/CreateUser'
import BookIndex from '@/components/Book/Index'
import BookCreate from '@/components/Book/CreateBook'
import BookEdit from '@/components/Book/EditBook'
import BookShow from '@/components/Book/ShowBook'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/create',
      name: 'user-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/books',
      name: 'books',
      component: BookIndex
    },
    {
      path: '/book/create',
      name: '/book-create',
      component: BookCreate
    },
    {
      path: '/book/edit/:bookId',
      name: '/book-edit',
      component: BookEdit
    },
    {
      path: '/book/:bookId',
      name: '/book',
      component: BookShow
    }
  ]
})
