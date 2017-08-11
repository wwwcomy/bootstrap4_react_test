import App from './App';
import NotFound from './components/NotFound';
import OrgList from './components/OrgList';
import Main from './components/Main';
import Simple from './components/maths/Simple';

export default {
    path: '/',
    component: App,
    indexRoute: {
        component: OrgList
    },
    childRoutes: [{
        path: 'main',
        component: Main,
        indexRoute: {
            component: OrgList
        },
        childRoutes: [{
            path: 'maths/simple',
            component: Simple
        }]
    }, {
        path: '*',
        component: NotFound
    }]
};