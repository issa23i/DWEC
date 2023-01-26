import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from './interfaces/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private _posts: Posts[] = [];

  constructor(private http: HttpClient) {}
  getQuery(query: string) {
    const url = `https://jsonplaceholder.typicode.com/${query}`;
    return this.http.get<Posts[]>(url);
  }

  public get posts(): Posts[] {
    return this._posts;
  }
  public set posts(value: Posts[]) {
    this._posts = value;
  }
}
