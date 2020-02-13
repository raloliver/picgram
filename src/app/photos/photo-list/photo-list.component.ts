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
  filter = '';

  constructor(
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.photos$ = this.photoService.getPhotos();
  }

}
