import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ITask } from 'src/app/common/interfaces/task';
import { HttpMethodService } from 'src/app/services/http-method.service';
import { CreatePage } from '../create/create.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false,
})
export class ListPage implements OnInit {

  tasks: ITask[] = [];
  isModalOpen = false;
  task: ITask | null = null;
  constructor(private httpMethod: HttpMethodService,
              private router: Router,
              private modalCtrl: ModalController,
              private alertController: AlertController
  ) { }
  
  ngOnInit() {
    this.loadTasks();
  }

  async loadTasks() {
    this.tasks = await this.httpMethod.get<ITask[]>('/api/task/')     
  }

  async setOpen(task: ITask | null, isOpen: boolean) {
    this.task = task; 
    this.isModalOpen = isOpen;
  }

  async remove(task: ITask) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: 'Eliminar',
      message: 'Desea eliminar la tera?',
      buttons: [
        {
          text: 'Si',
          handler: async () => {
            await this.httpMethod.delete<any>(`/api/task/${task.id}/`);
            this.loadTasks();
          }
        },
        {
          text: 'No',
          role: 'cancel',
        }
      ],
    });
    
    await alert.present();
    
  }
}
