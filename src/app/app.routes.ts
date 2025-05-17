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
                path: 'create',
                loadComponent: () => import('./blog/create-blog/create-blog.component').then(m => m.CreateBlogComponent),
            },
            {
                path: 'edit/:id',
                loadComponent: () => import('./blog/create-blog/create-blog.component').then(m => m.CreateBlogComponent),
            },
            {
                path: ':id',
                loadComponent: () => import('./blog/blog.component').then(m => m.BlogComponent),
            },
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
    {
        path: 'settings',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
    },
    //  Page not found
    // {
    //     path: '**',
    //     loadComponent: () => import('./auth/auth.component').then(m => m.AuthComponent)
    // }
];
