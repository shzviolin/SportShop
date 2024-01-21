import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

export const routes: Routes = [
  { path: '', title: 'Home Page', component: HomeComponent }, // Default route
  { path: 'test-error', component: TestErrorComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  {
    path: 'shop',
    title: 'Shop Page',
    loadChildren: () =>
      import('./shop/shop.module').then((mod) => mod.ShopModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];
