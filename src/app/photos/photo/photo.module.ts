import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PhotoComponent } from './photo.component';
import { PhotoRoutingModule } from './photo-routing.module';



@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PhotoRoutingModule
  ],
  exports: [PhotoComponent]
})
export class PhotoModule { }
