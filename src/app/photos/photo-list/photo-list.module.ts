import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [PhotoListComponent, SearchComponent],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoListModule { }
