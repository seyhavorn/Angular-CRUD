import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCommentByPostId(postId: string) {
    return this.http.get(`${this.baseUrl}/posts/${postId}/comments`);
  }

  deleteComment(CommentId: string) {
    return this.http.delete(`${this.baseUrl}/posts/${CommentId}`);
  }
}
