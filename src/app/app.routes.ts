import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { LazyComponent } from './lazy/lazy.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { fooResolver } from './foo.resolver';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      foo: fooResolver
    }
  },
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: 'list',
        component: ProductListComponent,
      },
      {
        path: ':productId',
        component: ProductDetailsComponent,
      },
      {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    component: ErrorComponentComponent,
  },
];
