import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from './photo.service';
import { Photo } from './photo.model';

@Component({
  selector: 'pg-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() id: number;
  @Input() title = '';
  @Input() thumbnailUrl = '';

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.snapshot.paramMap.get('id') ? this.getPhotoDetails(this.route.snapshot.paramMap.get('id')) : null;
  }

  goToPhotoDetails(id: number) {
    this.router.navigate([`photo/${id}`]);
  }

  getPhotoDetails(id: string) {
    this.photoService.getPhoto(id).subscribe(
      res => {
        this.id = res.id;
        this.title = res.title;
        this.thumbnailUrl = res.thumbnailUrl;
      },
      err => {
        console.error(err);
      }
    )
  }

}
