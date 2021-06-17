import React from 'react';


const BasePage = React.lazy(()=> import('./pages/basePage'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  {path:'/basepage',exact:true,name:'BasePage', component: BasePage},

];

export default routes;
