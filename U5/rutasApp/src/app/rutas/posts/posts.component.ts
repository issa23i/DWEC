import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from '../interfaces/posts';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  private _posts!: Posts[];

  constructor(private postsService: PostsService) {

    this.postsService.getQuery('post').subscribe( (data: Posts[]) => {
      this._posts = data
    })
    
    }
  ngOnInit(): void {
  }
    
  public get posts(): Posts[] {
    return this._posts;
  }
  public set posts(value: Posts[]) {
    this._posts = value;
  }
}
