import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent),
            },
            {
                path: 'signup',
                loadComponent: () => import('./auth/signup/signup.component').then(m => m.SignupComponent),
            },
        ]
    },
    //  Page not found
    // {
    //     path: '**',
    //     loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent)
    // }
];
