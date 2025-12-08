import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/main/main').then(m => m.Main)},
    { path: 'about', loadComponent: () => import('./features/about/about').then(m => m.About) },
    { path: 'login', loadComponent: () => import('./features/auth/login/login').then(m => m.Login) },
    { path: 'signup', loadComponent: () => import('./features/auth/signup/signup').then(m => m.Signup) },
    { path: 'forgot-password', loadComponent: () => import('./features/auth/forgot-password/forgot-password').then(m => m.ForgotPassword) },
    { path: '**', redirectTo: '' }
];
