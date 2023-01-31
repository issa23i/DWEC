import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';
import { Comment } from '../interfaces/comment';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{
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
    this.servicio.getQuery(`posts/${this._comment.postId}/comments`).subscribe( comments =>{
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

