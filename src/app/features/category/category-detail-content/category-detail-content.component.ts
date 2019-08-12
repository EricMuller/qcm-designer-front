import {Component, Input, OnInit} from '@angular/core';
import {Category} from '@api/qcm/model/category.model';


@Component({
  selector: 'app-category-detail-content',
  templateUrl: './category-detail-content.component.html',
  styleUrls: ['./category-detail-content.component.scss']
})
export class CategoryDetailContentComponent implements OnInit {

  @Input()
  public category: Category;


  constructor() {
  }

  ngOnInit() {
  }

}
