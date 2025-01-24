import { Component, Input } from '@angular/core';
import { Article } from '../article';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input() article: Article | undefined;
  @Input() previewMode: boolean = false;
  fullMode: boolean = !this.previewMode;
}
