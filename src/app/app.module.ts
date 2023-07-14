import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './form-login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PostComponent,
    PostDetailComponent,
    PostEditComponent,
    FormLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
