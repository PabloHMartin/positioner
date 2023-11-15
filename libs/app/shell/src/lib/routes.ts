import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('@app/homepage').then((m) => m.HomepageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
