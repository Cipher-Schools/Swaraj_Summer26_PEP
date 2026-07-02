import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Userdetail } from './pages/userdetail/userdetail';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';

export const routes: Routes = [
    {
        path: "",
        component: Login
    },
    {
        path: "signup",
        component: Signup
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "about",
        component: About
    },
    {
        path: "contact",
        component: Contact
    },
    {
        path: 'home/user/:userId',
        component: Userdetail
    }
];
