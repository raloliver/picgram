import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'pg-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.loadPhotos(1, 10);
  }

  loadPhotos(start: number, limit: number) {
    this.photoService.getPhotos(start, limit).subscribe(photos => console.log(photos));
  }

}
