import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
        {
            path: 'list',
            loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
        },
        {
            path: 'map',
            loadChildren: () => import('../map/map.module').then( m => m.MapPageModule)
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
