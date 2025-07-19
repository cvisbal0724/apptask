import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/task/list', icon: 'mail' },
    { title: 'Crear Tarea', url: '/task/create', icon: 'paper-plane' },
    { title: 'Auditoria', url: '/folder/favorites', icon: 'heart' },
  ];
  constructor() {}
}
