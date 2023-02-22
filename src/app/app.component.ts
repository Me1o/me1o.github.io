import { Component } from '@angular/core';
import { AnalyticsService } from './services/analytics.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'artery-app';
  constructor(private analyticsService: AnalyticsService) { }
  ngOnInit() {
    this.analyticsService.boot();
  }
}
