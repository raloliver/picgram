import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { User } from './user.model';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUser(id: string | number): Observable<User> {
    return this.http
      .get<User>(`${API_URL}/users/${id}`)
      .pipe(take(1));
  }
}
