import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListModule } from './photo-list/photo-list.module';



@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    PhotoListModule
  ]
})
export class PhotosModule { }
