import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  getPost(id: number) {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }
}
