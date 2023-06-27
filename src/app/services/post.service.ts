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

  getPost(id: any) {
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }

  editPost(id: string, title: string, body: string) {
    return this.http.patch(`${this.baseUrl}`, { title, body });
  }

  deletePost(id: string) {
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }
}
