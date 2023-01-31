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
  
  private _postId!: '';
  private _comments!: Comment[];
  public get comments(): Comment[] {
    return this._comments;
  }
  public set comments(value: Comment[]) {
    this._comments = value;
  }

  constructor( private servicio: CommentService, private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe(({id})=>{this._postId = id });
    this.servicio.getQuery(`posts/${this._postId}/comments`).subscribe( data => this._comments = data)
  } 

  
  
}
