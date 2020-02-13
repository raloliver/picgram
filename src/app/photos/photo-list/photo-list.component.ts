import { Component, OnInit, ɵrenderComponent } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'pg-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ɵrenderComponent(PhotoComponent);
  }

}
