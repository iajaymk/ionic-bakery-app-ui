import { Injectable } from '@angular/core';
import { categories } from 'src/app/data/categories';
import { Category } from 'src/app/interfaces/categories.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getCategories(): Category[] {
    return categories;
  }
}
