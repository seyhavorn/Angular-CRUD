import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'crud-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  posts: any = null;
  post: any = null;

  constructor(
    private postService: PostService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.sub = this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  getPostById(id: number) {
    this.sub = this.postService.getPost(id).subscribe((data) => {
      this.router.navigate([`/post/${id}`]);
    });
  }

  deletePost(id: string) {
    this.sub = this.postService.deletePost(id).subscribe((data) => {
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
