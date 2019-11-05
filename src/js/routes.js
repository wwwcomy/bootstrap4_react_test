import App from './App';
import NotFound from './components/NotFound';
import QuizList from './components/QuizList';
import Main from './components/Main';
import Simple from './components/maths/Simple';

export default {
    path: '/',
    component: App,
    indexRoute: {
        component: QuizList
    },
    childRoutes: [{
        path: 'main',
        component: Main,
        indexRoute: {
            component: QuizList
        },
        childRoutes: [{
            path: 'maths/simple',
            component: Simple
        },{
            path: 'maths/simple2',
            component: Simple
        }]
    }, {
        path: '*',
        component: NotFound
    }]
};