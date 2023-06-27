import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailComponent,
  },
  {
    path: 'edit/:id',
    component: PostEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
