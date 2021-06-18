import React from 'react';

const BasePage = React.lazy(()=> import('./pages/basePage'))
const TestPage = React.lazy(()=> import('./pages/test'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path:'/basepage', exact:true,name:'BasePage', component: BasePage},
  { path:'/test', exact:true, name:'Test', component: TestPage},
];

export default routes;
