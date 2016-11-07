import App from './App';
import NotFound from './components/NotFound';
import OrgList from './components/OrgList';

export default {
  path: '/',
  component: App,
  indexRoute: {
    component: OrgList
  },
  childRoutes: [{
    path: 'main',
    component: OrgList,
    indexRoute: {
      component: OrgList
    }
  }, {
    path: '*',
    component: OrgList
  }]
};