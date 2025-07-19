import { Component, OnInit } from '@angular/core';
import { IAudit } from 'src/app/common/interfaces/audit';
import { HttpMethodService } from 'src/app/services/http-method.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.page.html',
  styleUrls: ['./audit.page.scss'],
  standalone: false
})
export class AuditPage implements OnInit {

  audits: IAudit[] = [];
  constructor(private httpMethod: HttpMethodService) { }
  
  ngOnInit() {
    this.loadTasks();
  }

  async loadTasks() {
    this.audits = await this.httpMethod.get<IAudit[]>('/api/audit-task/')     
  }

}
