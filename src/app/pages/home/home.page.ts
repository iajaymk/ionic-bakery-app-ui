import { Component, OnInit } from '@angular/core';
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
  ],
})
export class HomePage implements OnInit {
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
