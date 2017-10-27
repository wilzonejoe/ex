import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';


const appRoutes = [
  {
    path: '**',
    component: AppComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);