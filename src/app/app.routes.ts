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
        path: 'blog',
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: ':id',
                loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent),
            },
            {
                path: 'create',
                loadComponent: () => import('./blog/create-blog/create-blog.component').then(m => m.CreateBlogComponent),
            },
            {
                path: 'edit/:id',
                loadComponent: () => import('./blog/create-blog/create-blog.component').then(m => m.CreateBlogComponent),
            }
        ]
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
