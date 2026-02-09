import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
  IonIcon,
  IonRow,
  IonToolbar,
  IonCol,
  IonSearchbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cart,
  chevronDownOutline,
  location,
  notifications,
  options,
} from 'ionicons/icons';
import { ListHeadingComponent } from 'src/app/components/list-heading/list-heading.component';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { Banner } from 'src/app/interfaces/banner.interface';
import { BannerService } from 'src/app/services/banner/banner.service';
import { Category } from 'src/app/interfaces/categories.interface';
import { CategoryService } from 'src/app/services/categories/categories.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/interfaces/products.interface';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonButton,
    IonIcon,
    IonLabel,
    IonItem,
    IonText,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonRow,
    IonCol,
    IonSearchbar,
    ListHeadingComponent,
    BannerComponent,
    CategoriesComponent,
  ],
})
export class HomePage implements OnInit {
  banners = computed<Banner[]>(() => this.bannerService.getBanners());
  categories = computed<Category[]>(() => this.categoryService.getCategories());
  products = computed<Product[]>(() => this.productService.getProducts());

  private bannerService = inject(BannerService);
  private categoryService = inject(CategoryService);
  private productService = inject(ProductService);

  constructor() {
    addIcons({
      location,
      chevronDownOutline,
      cart,
      notifications,
      options,
    });
  }

  ngOnInit() {}
}
