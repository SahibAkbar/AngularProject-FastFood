import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  
  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Burger',
        price: 5.99,
        cookTime: '10 min',
        favorite: true,
        origins: ['American'],
        star: 4.5,
        tags: ['fast food', 'burger'],
        imageUrl: '/assets/1.jpg',
      },
      {
        id: 2,
        name: 'Pizza',
        price: 4.99,
        cookTime: '15 min',
        favorite: false,
        origins: ['Italian'],
        star: 5,
        tags: ['fast food', 'pizza'],
        imageUrl: '/assets/2.jpg',
      },
      {
        id: 3,
        name: 'Hot Dog',
        cookTime: '10 min',
        price: 3.99,
        favorite: true,
        origins: ['American'],
        star: 3,
        tags: ['fast food', 'hot dog'],
        imageUrl: '/assets/3.jpg',
      },
      {
        id: 4,
        name: 'Sandwich',
        price: 2.99,
        cookTime: '5 min',
        favorite: false,
        origins: ['American'],
        star: 4.5,
        tags: ['fast food', 'sandwich'],
        imageUrl: '/assets/4.jpg',
      },
      {
        id: 5,
        name: 'Fries',
        price: 1.99,
        favorite: false,
        cookTime: '5 min',
        origins: ['American'],
        star: 5,
        tags: ['fast food', 'fries'],
        imageUrl: '/assets/5.jpg',
      },
      {
        id: 6,
        name: 'Sushi',
        price: 9.99,
        favorite: true,
        cookTime: '20 min',
        origins: ['Japanese'],
        star: 3.5,
        tags: ['sushi'],
        imageUrl: '/assets/6.jpg',
      },
      {
        id: 7,
        name: 'Ramen',
        price: 8.99,
        favorite: false,
        origins: ['Japanese'],
        cookTime: '15 min',
        star: 5,
        tags: ['ramen'],
        imageUrl: '/assets/7.jpg',
      },
      {
        id: 8,
        name: 'Tacos',
        price: 7.99,
        favorite: false,
        cookTime: '10 min',
        origins: ['Mexican'],
        star: 5,
        tags: ['tacos'],
        imageUrl: '/assets/8.jpg',
      }
    ];
  }
}
