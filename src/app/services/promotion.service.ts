import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS} from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotion(): Promotion[] {
    return PROMOTIONS;
  }

  getDish(id: string): Promotion {
    return PROMOTIONS.find(el => el.id === id);
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.find(el => el.featured);
  }
}
