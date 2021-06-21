import React from 'react';

const BasePage = React.lazy(()=> import('./pages/basePage'))
const ListingPage = React.lazy(()=> import('./pages/Listing'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path:'/basepage', exact:true,name:'BasePage', component: BasePage},
  { path:'/listing', exact:true, name:'Listing', component: ListingPage},
];

export default routes;
