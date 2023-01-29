import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Posts } from '../interfaces/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

 
  private post : any

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    
    this.route.paramMap.subscribe( (params:ParamMap) => {
      let userId = params.get('userId')
      let id = params.get('id')
      let title = params.get('title')
      let body = params.get('body')

    
      this.post.userId = userId
      this.post.id = id
      this.post.title = title
      this.post.body = body
    })
  }
  
}
