import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo.model';

@Pipe({
  name: 'filterByTitle'
})
export class FilterByTitlePipe implements PipeTransform {

  transform(photos: Photo[], titleQuery: string) {
    titleQuery = titleQuery.trim().toLowerCase();

    if (titleQuery) {
      return photos.filter(photo =>
        photo.title.toLowerCase().includes(titleQuery)
      );
    } else {
      return photos;
    }
  }

}
