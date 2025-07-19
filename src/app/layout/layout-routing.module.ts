import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: 'task',
        loadChildren: () => import('./task/task.module').then( m => m.TaskPageModule)
      },
      {
        path: 'audit',
        loadChildren: () => import('./audit/audit.module').then( m => m.AuditPageModule)
      },
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
