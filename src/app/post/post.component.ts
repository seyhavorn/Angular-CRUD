import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';

@Component({
  selector: 'crud-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  posts: any = null;
  post: any = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.sub = this.postService.getPosts().subscribe((data) => {
      console.log('get posts', data);

      this.posts = data;
    });
  }

  getPostById(id: number) {
    this.sub = this.postService.getPost(id).subscribe(data=> {
      console.log('post by id', data);
      // this.post = this.
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
