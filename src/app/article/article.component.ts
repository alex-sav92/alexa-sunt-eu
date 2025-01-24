import { Component, Input } from '@angular/core';
import { Article } from '../article';
import { NgIf, CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  article: Article | undefined;
  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router) {}
  ngOnInit() {
    const myId = this.route.snapshot.paramMap.get('id');
    this.article = this.articlesService.getArticleById(parseInt(myId!));
    console.log("MY ID:", myId);
  }
}
