import { Injectable } from '@angular/core';
import { Article } from '../article';
import { Observable, of } from 'rxjs';
import { ARTICLES } from '../mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }
  
  getArticles(): Observable<Article[]> {
    const articles = of(ARTICLES);
    return articles;
  }

  getArticleById(id: number){
    let article = ARTICLES.find(a => a.id == id)
    return article;
  }

}
