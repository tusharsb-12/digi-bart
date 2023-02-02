import Login from '../pages/login'
import ForgotPassword from '../pages/ForgotPassword'
import Page404 from '../pages/404'


const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/404',
        component: Page404,
    },
]

export default routes
