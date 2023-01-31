import { Injectable } from '@angular/core';
import { Comment } from './interfaces/comment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private _comments: Comment[] = [];
  
  constructor(private http: HttpClient) { }
  getQuery(query: string) {
    const url = `https://jsonplaceholder.typicode.com/${query}`;
    return this.http.get<Comment[]>(url);
  }

  public get comments(): Comment[] {
    return this._comments;
  }
  public set comments(value: Comment[]) {
    this._comments = value;
  }
}
