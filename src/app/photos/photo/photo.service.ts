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

  public getPhotos(): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(`${API_URL}/photos`)
      .pipe(take(1));
  }

  public getPhotosPaginated(start: number = 1, limit: number): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(`${API_URL}/photos?_start=${start}&_limit=${limit}`)
      .pipe(take(1));
  }
}
