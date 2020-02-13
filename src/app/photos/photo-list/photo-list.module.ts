import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
import { SearchComponent } from './search/search.component';
import { FilterByTitlePipe } from './filter-by-title.pipe';



@NgModule({
  declarations: [
    PhotoListComponent,
    SearchComponent,
    FilterByTitlePipe
  ],
  imports: [
    CommonModule,
    PhotoModule
  ]
})
export class PhotoListModule { }
