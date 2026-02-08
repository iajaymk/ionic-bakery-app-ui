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
