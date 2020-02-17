import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take, mergeMap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { Photo, Album, PhotoAlbum } from './photo.model';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  public getPhoto(id: string): Observable<PhotoAlbum> {
    return this.http
      .get<PhotoAlbum>(`${API_URL}/photos?id=${id}`)
      .pipe(map(res => res[0]))
      .pipe(mergeMap(photo =>
        this.getAlbum(photo.albumId)
          .pipe(map(album => ({ album, photo })))
      ))
      .pipe(take(1));
  }

  public getAlbum(id: number): Observable<Album> {
    return this.http
      .get<Album>(`${API_URL}/albums/${id}`)
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
