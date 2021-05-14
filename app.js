import { Router } from '@vaadin/router';
import './login-trader.js';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  { path: '/', component: 'login-trader' },
  {
    path: '/welcome',
    component: 'welcome-user',
    action: async () => {
      await import('./src/views/trader/welcome/welcome-user');
    },
  },
]);
