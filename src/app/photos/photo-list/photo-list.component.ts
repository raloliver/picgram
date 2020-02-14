import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'pg-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos$: Observable<Photo[]>;
  photos: Photo[] = [];
  filter = '';

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  loadPhotos() {
    this.photos$ = this.photoService.getPhotos();
  }

  getPhotos() {
    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }

}
