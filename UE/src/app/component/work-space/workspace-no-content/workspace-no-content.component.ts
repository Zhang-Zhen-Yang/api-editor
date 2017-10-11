import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/api.service'
@Component({
  selector: 'app-workspace-no-content',
  templateUrl: './workspace-no-content.component.html',
  styleUrls: ['./workspace-no-content.component.css']
})
export class WorkspaceNoContentComponent implements OnInit {

  constructor(public apiService:ApiService) { }

  ngOnInit() {

  }

}
