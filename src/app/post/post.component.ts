import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrismicService } from '../services/prismic.service';
import * as prismicH from '@prismicio/helpers'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  public id: any;
  public post:any;
  public documentAsHTML: any;
  constructor(public prismicService: PrismicService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.prismicService.getPost(this.id).then(p => {
      this.post = p;
      this.documentAsHTML = prismicH.asHTML(this.post.data.body);

    })
  }

  get postDate(){
    let date = new Date(this.post.first_publication_date);
    return date.getDate() + " " + new Intl.DateTimeFormat("en-US", { month: "long" }).format() + " " + date.getFullYear();
  }
}
