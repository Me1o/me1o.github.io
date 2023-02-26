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
  public isLoading = false;
  constructor(public prismicService: PrismicService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.prismicService.getPosts().then(p => {
      this.posts = p;
      this.isLoading = false;
    })
  }

   postDate(post: any){
    let date = new Date(post.first_publication_date);
    return date.getDate() + " " + new Intl.DateTimeFormat("en-US", { month: "long" }).format() + " " + date.getFullYear();
  }
}
