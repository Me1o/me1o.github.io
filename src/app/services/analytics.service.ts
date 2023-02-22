import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';
import { Gtag } from 'angular-gtag';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  default_title = 'Home';

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private title: Title,
    private gtag: Gtag,
  ) { }

  boot() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activeRoute),
      map(route => route.firstChild),
      switchMap(route => route!.data),
      map((data) => {
        let postTitle = data.title;
        const start = this.router.url.slice(0, 6);
        if(start == '/post/'){
          postTitle = this.router.url.replace(start, '');
          postTitle = postTitle.replaceAll("-", " ");
        }
        //here goes the GA reporting code
        this.gtag.pageview({
          page_title: postTitle ? postTitle : this.default_title,
          page_path: this.router.url,
          page_location: "www.me1o.io" + this.router.url
        });
        return data && data.title ? `${data.title} • ${this.default_title}` : this.default_title;
      })
    ).subscribe((current_title) => this.title.setTitle(current_title));
  }
}
