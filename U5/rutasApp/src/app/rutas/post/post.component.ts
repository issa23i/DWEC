import { Component, OnInit } from '@angular/core';
import { Posts } from '../interfaces/posts';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

 
  private _post: Posts = {
    id: '',
    userId: '',
    title: '',
    body: ''
  };

  constructor( private servicio: PostsService, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id})=>{this._post.id = id });

    this.servicio.getQuery('posts').subscribe( posts => {
      posts.find( p => {
        if (this._post.id == p.id) {
          this._post = p
        }
      })
    })
  }
  public get post(): Posts {
    return this._post;
  }
  public set post(value: Posts) {
    this._post = value;
  }

}
