import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Userdetail } from './pages/userdetail/userdetail';

export const routes: Routes = [
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
