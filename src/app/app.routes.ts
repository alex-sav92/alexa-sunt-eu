import { Routes } from '@angular/router';
import { CodeblogComponent } from './codeblog/codeblog.component';
import { ArticleComponent } from './article/article.component';

export const myroutes: Routes = [
  {
    path: '',
    component: CodeblogComponent,
    title: 'Code Blog',
  },
  {
    path: 'cod/:id',
    component: ArticleComponent,
    title: 'Article',
  }
  ];