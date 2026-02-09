import { Injectable } from '@angular/core';
import { banners } from '../../data/banner';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor() {}

  getBanners() {
    return banners;
  }
}
