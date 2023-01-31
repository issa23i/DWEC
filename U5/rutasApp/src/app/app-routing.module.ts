import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './rutas/about/about.component';
import { EmployeComponent } from './rutas/employe/employe.component';
import { EmployeesComponent } from './rutas/employees/employees.component';
import { HomeComponent } from './rutas/home/home.component';
import { PostComponent } from './rutas/post/post.component';
import { PostsComponent } from './rutas/posts/posts.component';
import { CommentsComponent } from './rutas/comments/comments.component';


export const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'employees/:id',
    component: EmployeComponent,
    pathMatch: 'full'
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    pathMatch: 'full'
  },/** 
  {
    path: 'posts/:id',
    component: PostsComponent
  },*/
  {
    path: 'posts/:id/comments',
    component: CommentsComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
