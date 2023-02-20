import { Component, OnInit } from '@angular/core';
import { PrismicService } from '../services/prismic.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public post: any;
  public showWidget: boolean = true;
  constructor(public prismicService: PrismicService) {}

  ngOnInit(): void {
    this.prismicService.getPosts().then(p => {
      this.post = p[0];
    })
  }

  toggleWidget(){
    this.showWidget = !this.showWidget;
  }

  get postDate(){
    let date = new Date(this.post.first_publication_date);
    return date.getDate() + " " + new Intl.DateTimeFormat("en-US", { month: "long" }).format() + " " + date.getFullYear();
  }

  cvUpdateDate(){
    let date = new Date();
    let lastUpdated = "1/1/2023";
    let today = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    return this.datediff(this.parseDate(lastUpdated), this.parseDate(today));
  }

   parseDate(str: any) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
  }
  datediff(first: any, second: any) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
}
