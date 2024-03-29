import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PhotoService } from './photo.service';
import { Observable } from 'rxjs';
import { User } from './../../user/user.model';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'pg-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() id: number;
  @Input() albumId: number;
  @Input() title = '';
  @Input() thumbnailUrl = '';

  inPhotoDetails: boolean;
  user$: Observable<User>;

  constructor(
    private photoService: PhotoService,
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.snapshot.paramMap.get('id') ? this.getPhotoDetails(this.route.snapshot.paramMap.get('id')) : this.inPhotoDetails = false;
  }

  getPhotoDetails(id: string) {
    this.inPhotoDetails = true;
    this.photoService.getPhoto(id).subscribe(
      res => {
        this.id = res.photo.id;
        this.albumId = res.photo.albumId;
        this.title = res.photo.title;
        this.thumbnailUrl = res.photo.thumbnailUrl;
        this.user$ = this.userService.getUser(res.album.userId);
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
