import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { PhotoService } from './photo.service';

@Component({
  selector: 'pg-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() id: number;
  @Input() title = '';
  @Input() thumbnailUrl = '';
  inPhotoDetails: boolean;

  constructor(
    private photoService: PhotoService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.snapshot.paramMap.get('id') ? this.getPhotoDetails(this.route.snapshot.paramMap.get('id')) : this.inPhotoDetails = false;
  }

  goToPhotoDetails(id: number) {
    this.router.navigate([`photo/${id}`]);
  }

  getPhotoDetails(id: string) {
    this.inPhotoDetails = true;
    this.photoService.getPhoto(id).subscribe(
      res => {
        this.id = res.id;
        this.title = res.title;
        this.thumbnailUrl = res.thumbnailUrl;
      },
      err => {
        console.error(err);
      }
    );
  }

  goBack() {
    this.location.back();
  }

}
