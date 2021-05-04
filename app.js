import { Router } from "@vaadin/router";
import './login-trader';

const routes = [
  {
    path: '/', component: 'login-trader'
  }
];
const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  {path: '/', component: 'login-trader'}/* ,
  {path: 'views/trader',
      children:[
      {path:'welcome', component: 'welcome-user', action: async()=>{await import('./src/views/trader/welcome/welcome-user')}}
    ]
  } */
  ,{path:'/welcome', component: 'welcome-user', action: async()=>{await import('./src/views/trader/welcome')}}
]);
/*
,
      {
        path: 'about',
        component: 'lit-about',
        action: async () => {
          await import('./about/about');
        },
      },
      {
        path: 'admin/:section',
        component: 'lit-admin',
        action: async () => {
          await import('./admin/admin');
        },
      }
*/