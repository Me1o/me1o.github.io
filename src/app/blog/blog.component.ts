import { Component, OnInit } from '@angular/core';
import { PrismicService } from '../services/prismic.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  public posts: any[];
  constructor(public prismicService: PrismicService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.prismicService.getPosts().then(p => {
      this.posts = p;
    })
  }
}
