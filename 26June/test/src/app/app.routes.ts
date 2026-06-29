import { Routes } from '@angular/router';
import { Card } from './card/card';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: App
    // },
    {
        path: 'child',
        component: Card
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'contact',
        component: Contact
    }
];
