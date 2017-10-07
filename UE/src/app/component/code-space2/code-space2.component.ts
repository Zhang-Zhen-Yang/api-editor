import { Component, OnInit } from '@angular/core';
import { CodeSpaceComponent } from '../code-space/code-space.component'
import { ApiService } from '../../service/api.service'
@Component({
  selector: 'app-code-space2',
  templateUrl: './code-space2.component.html',
  styleUrls: ['./code-space2.component.css']
})
export class CodeSpace2Component extends CodeSpaceComponent implements OnInit {
  index = 1
  constructor(public apiService:ApiService) {
    super(apiService);
  }

  ngOnInit() {
  }
}
