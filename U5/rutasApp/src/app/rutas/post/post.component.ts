import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Posts } from '../interfaces/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  private post! : Posts 

  constructor(private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe( (params:ParamMap) => {
      console.log(params.get('body'))
      console.log(params.getAll('body'))
      console.log(params.keys.length)
    })
  }
  
}
