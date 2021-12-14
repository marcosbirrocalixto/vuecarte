import Home from '@/pages/Home';
import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/DefaultTemplate'),
        children: [            
            {        
                path: '/',
                component: Home,
                name: 'home',
            },
            
        ]
    },

    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate'),
        children:[
            {        
                path: '/login',
                component: Login,
                name: 'login',
            },
        
            {        
                path: '/register',
                component: Register,
                name: 'register',
            } 
        ] 
    }
]

export default routes