import { Component, Input } from '@angular/core';
import { Article } from '../article';
import { NgFor, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-preview',
  imports: [RouterModule],
  templateUrl: './article-preview.component.html',
  styleUrl: './article-preview.component.css'
})
export class ArticlePreviewComponent {
  @Input() article: Article | undefined;
}
