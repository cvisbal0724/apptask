import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';
import { CreatePageModule } from './create/create.module';
import { ListPageModule } from './list/list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskPageRoutingModule,
    CreatePageModule,
    ListPageModule
  ],
  declarations: [TaskPage]
})
export class TaskPageModule {}
