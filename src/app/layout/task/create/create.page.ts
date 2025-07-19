import { Component, Input, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpMethodService } from 'src/app/services/http-method.service';
import { AlertController } from '@ionic/angular';
import { ITask } from 'src/app/common/interfaces/task';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  standalone: false,
})
export class CreatePage implements OnInit {

  taskForm: FormGroup;
  @Input() 
  data: ITask | null = null;

  status = [
    { "value": "pendiente", "label": "Pendiente" },
    { "value": "completada", "label": "Completada" },
    { "value": "pospuesta", "label": "Pospuesta" }
  ]

  constructor(private fb: FormBuilder, 
              private httpMethod: HttpMethodService,
              private alertController: AlertController) {
    this.taskForm = this.fb.group({
      description: ['', Validators.required],
      status: ['Pendiente', Validators.required],
    });
  }


  ngOnInit() {
    if (this.data) {
      this.taskForm.controls['description'].setValue(this.data?.description);
      this.taskForm.controls['status'].setValue(this.data?.status);
    }
  }

  async save() {
    if (this.taskForm.valid && !this.data) {
      const body = this.taskForm.value;
      const result = await this.httpMethod.post<ITask>('/api/task/', body);
      if (result) {
        const alert = await this.alertController.create({
          header: '',
          subHeader: 'Exitoso!',
          message: 'La tarea ha sido agregada.',
          buttons: ['OK'],
        });
        
        await alert.present();
        this.taskForm.reset();
      }
    } else  if (this.taskForm.valid && this.data) {
      const body = this.taskForm.value;
      const result = await this.httpMethod.post<ITask>(`/api/task/${this.data.id}`, body);
      if (result) {
        const alert = await this.alertController.create({
          header: '',
          subHeader: 'Exitoso!',
          message: 'La tarea ha sido actualizada.',
          buttons: ['OK'],
        });
        
        await alert.present();
        this.taskForm.reset();
      }
    }
  }


}
