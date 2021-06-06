
const routes = [
  {
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Profile/CompleteAccount.vue') },
      { path: '/enroll', component: () => import('pages/Enroll/EnrollCourses.vue') },
      { path: '/my-Courses', component: () => import('pages/Enroll/MyCourses.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Register.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
