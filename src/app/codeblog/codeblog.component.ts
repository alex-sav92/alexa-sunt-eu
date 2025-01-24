import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleComponent } from "../article/article.component";
import { ArticlePreviewComponent } from "../article-preview/article-preview.component";
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-codeblog',
  imports: [ ArticlePreviewComponent],
  templateUrl: './codeblog.component.html',
  styleUrl: './codeblog.component.css'
})
export class CodeblogComponent {
  latestArticles: Article[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.initArticles();
  }

  initArticles(): void {
    this.articlesService.getArticles()
        .subscribe(allArticles => this.latestArticles = allArticles);
  }
}
