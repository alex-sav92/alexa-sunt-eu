import { Component } from '@angular/core';
import { Article } from '../article';
import { ArticleComponent } from "../article/article.component";
import { ArticlePreviewComponent } from "../article-preview/article-preview.component";

@Component({
  selector: 'app-codeblog',
  imports: [ ArticlePreviewComponent],
  templateUrl: './codeblog.component.html',
  styleUrl: './codeblog.component.css'
})
export class CodeblogComponent {
  latestArticles: Article[] = [];

  ngOnInit(): void {
    this.latestArticles = [
      new Article(1, "Wish me luck on the Databricks Data Analyst Associate Exam", "This is test, may have many characters, sper ca over the limit. tu ce zici? O zi buna iti doresc. Pa", "23.01.2025", ["it", "devexp"]),
      new Article(2, "Snowflake! How did I earn the SnowPro Core Certification with no prior knowledge", "This is another test. I will rather not strip my text, thank you very much. Bye bye. Are you still there with me? Sold out Arenele romane", "23.01.2025", ["it", "devexp", "education"]),
    ];
  }
}
