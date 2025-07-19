import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { IUser } from '../common/interfaces/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
  standalone: false
})
export class LayoutPage implements OnInit {

  public appPages = [
    { title: 'Tareas', url: '/task/list', icon: 'list' },
    { title: 'Crear Tarea', url: '/task/create', icon: 'create' },
    { title: 'Auditoria', url: '/audit', icon: 'heart' },
  ];
  public user = {} as IUser;
  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    this.user = await this.storage.get('user');
  }

  async logout() {
    await this.storage.clear(); // opcional: limpiar tokens / datos
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

}
