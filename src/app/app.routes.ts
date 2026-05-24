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
import { authGuard } from './auth-guard';
import { ProductTest } from './product-test/product-test';
import { testGuard } from './test-guard';
import { TestA } from './test-a/test-a';
import { TestB } from './test-b/test-b';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    canMatch: [authGuard],
    loadChildren: () =>
      import('./components/dashboard/dashboard.routes').then(
        (mod) => mod.DASHBOARD_ROUTES,
      ),
    resolve: {
      foo: fooResolver,
    },
  },
  {
    path: 'product',
    // component: ProductComponent,
    loadComponent: () =>
      import('./components/product/product.component').then(
        (c) => c.ProductComponent,
      ),
    children: [
      {
        path: 'list',
        component: ProductListComponent,
      },
      {
        path: '',
        canActivateChild: [authGuard],
        children: [
          {
            path: 'test',
            component: ProductTest,
          },
          {
            path: ':productId',
            component: ProductDetailsComponent,
          },
        ],
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'test',
    canMatch: [testGuard],
    component: TestA,
  },
  {
    path: 'test',
    component: TestB,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorComponentComponent,
  },
];
