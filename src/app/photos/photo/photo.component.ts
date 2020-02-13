import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pg-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() title = '';
  @Input() thumbnailUrl = '';

  constructor() { }

  ngOnInit() {
  }

}
