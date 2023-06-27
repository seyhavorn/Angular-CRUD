import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'crud-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit, OnDestroy {
  private sub!: Subscription;
  post: any = null;
  id: any;
  comments: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.sub = this.postService.getPost(id).subscribe((post) => {
      this.post = post;
    });
    this.getCommentById(id);
  }

  deleteComment(id: string) {
    this.sub = this.commentService.deleteComment(id).subscribe((data) => {
      this.cdr.detectChanges();
    });
  }

  getCommentById(id: any) {
    this.sub = this.commentService
      .getCommentByPostId(id)
      .subscribe((comments) => {
        this.comments = comments;
      });
  }

  backButton() {
    this.router.navigate(['../']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
