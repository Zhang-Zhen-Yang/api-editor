import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-space',
  templateUrl: './image-space.component.html',
  styleUrls: ['./image-space.component.css']
})
export class ImageSpaceComponent implements OnInit {
  @Input() src;
  constructor() { }

  ngOnInit() {
    
  }

}
