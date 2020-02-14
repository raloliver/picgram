import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo.model';

@Component({
  selector: 'pg-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  currentDate: Date = new Date();
  photos: Photo[] = [];
  filter = '';

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }

}
