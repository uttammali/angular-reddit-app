import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit 
{
    @Input() article: Article;
  constructor() 
  {
    
  }
    voteUp()
    {
        this.article.votes++;
    }
    voteDown()
    {
        this.article.votes--;
    }
  ngOnInit() 
  {

  }

}
