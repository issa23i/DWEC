import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../interfaces/comment';
import { PostsService } from '../posts.service';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  private _comment: Comment = {
    postId: '',
    id: '',
    name: '',
    email: '',
    body: ''
  };

  constructor( private servicio: CommentService, private activatedRoute : ActivatedRoute  ){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{this._comment.id = id })
    this.servicio.getQuery(`posts/${this._comment.id}/comments`).subscribe( comments =>{
      comments.find( comment => {
        if( this._comment.id == comment.id) {
          this._comment = comment
        }
      })
    })
  }

  
  public get comment(): Comment {
    return this._comment;
  }
  public set comment(value: Comment) {
    this._comment = value;
  }
}
