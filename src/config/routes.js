import Home from '../features/home/';
import Signin from '../features/signin/';
import Signup from '../features/signup/';
import User from '../features/user/';


const appRoutes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/sign-in',
    component: Signin
  },
  {
    path: '/sign-up',
    component: Signup
  },
  {
    path: '/user',
    component: User,
    isPrivate: 'true'
  },
]

export default appRoutes;