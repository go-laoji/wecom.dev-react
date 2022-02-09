export default [
  {
    path: '/',
    component: '@/pages/index',
    name: '欢迎',
  },
  {
    path: '/self',
    name: '自建应用',
    routes: [
      {
        name: '扫码登陆',
        path: '/self/scan',
        component: './self/Scan',
      },
      {
        name: '网页授权',
        path: '/self/authorize',
        component: './self/Authorize',
      },
    ],
  },
  {
    path: '/3rd',
    name: '三方应用',
    routes: [
      {
        name: '扫码登陆',
        path: '/3rd/scan',
        component: './3rd/Scan',
      },
      {
        name: '网页授权',
        path: '/3rd/authorize',
        component: './3rd/Authorize',
      },
    ],
  },
  {
    path: '/login/',
    layout:false,
    routes: [
      {path: '/login/oauth', component: '@/pages/oauth', name: '登陆'}
    ]
  }
];
