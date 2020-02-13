import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';


const routes: Routes = [
  {
    path: '',
    component: PhotoListComponent
    // loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
