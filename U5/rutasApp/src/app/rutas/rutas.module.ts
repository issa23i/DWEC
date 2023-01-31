import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { EmployeComponent } from './employe/employe.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AboutComponent,
    EmployeComponent,
    EmployeesComponent,
    HomeComponent,
    NavbarComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    AboutComponent,
    EmployeComponent,
    EmployeesComponent,
    HomeComponent,
    PostsComponent,
    NavbarComponent,
    RouterModule,
    PostComponent,
    CommentsComponent
  ]
})
export class RutasModule { }
