import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'wfm-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  categories: Category[] = [];
  isLoaded = false;

  ngOnInit() {
    // this.categoriesService.getCategories()
    // .subscribe((categories)=>{
    //   this.categories = categories;
    //   this.isLoaded = true;
    // })
  }

  // newCategoryAdded(category: Category){
  //   //add to array
  //   this.categories.push(category);
  // }

  // categoryWasEdited(category: Category){
  //   const index = this.categories.findIndex(c=> c.id === category.id);
  //   this.categories[index] = category;
  // }
}