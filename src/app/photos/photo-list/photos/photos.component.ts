import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../photo/photo.model';

@Component({
  selector: 'pg-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];

  constructor() { }

  ngOnInit() {
  }

}
