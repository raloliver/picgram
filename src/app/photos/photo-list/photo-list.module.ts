import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';



@NgModule({
  declarations: [PhotoListComponent],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoListModule { }
