import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  { path: '', redirectTo: 'home',pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {title: 'Home'} },
  { path: 'blog', component: BlogComponent, data: {title: 'Blog'} },
  { path: 'post/:id', component: PostComponent, data: {title: 'Blog Post'} },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
