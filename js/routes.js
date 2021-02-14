var routes = [
  {
    path: '/',
    url: 'index.html',
    name: 'home',
  },
  {
    path: '/main/',
    url: 'pages/main.html',
    name: 'main',
  },
  {
    path: '/help/',
    url: 'pages/help.html',
    name: 'help',
  },
  {
    path: '(.*)',
    url: 'pages/404.html',
  }
];
