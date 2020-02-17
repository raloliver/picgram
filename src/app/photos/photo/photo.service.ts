import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Photo } from './photo.model';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  public getPhoto(id: number): Observable<Photo> {
    return this.http
      .get<Photo>(`${API_URL}/photos?id=${id}`)
      .pipe(map(res => res[0]))
      .pipe(take(1));
  }

  public getPhotos(): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(`${API_URL}/photos`)
      .pipe(map(res => res.slice(0, 9)))
      .pipe(take(1));
  }

  public getPhotosPaginated(start: number = 1, limit: number = 10): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(`${API_URL}/photos?_start=${start}&_limit=${limit}`)
      .pipe(take(1));
  }
}
