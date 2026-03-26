import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crave-cart',
  templateUrl: './crave-cart.component.html',
  styleUrls: ['./crave-cart.component.css']
})
export class CraveCartComponent implements OnInit {
  featuredFoods = [
    { 
      name: 'Classic Cheeseburger', 
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80', 
      rating: 4.8, 
      price: 12.99 
    },
    { 
      name: 'Margherita Pizza', 
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80', 
      rating: 4.9, 
      price: 15.49 
    },
    { 
      name: 'Spicy Sushi Roll', 
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80', 
      rating: 4.7, 
      price: 18.00 
    },
    { 
      name: 'Grilled Steak', 
      image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=600&q=80', 
      rating: 4.9, 
      price: 28.50 
    },
  ];

  myOrders = [
    { 
      id: '#ORD-9821', 
      name: 'BBQ Chicken Pizza', 
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80', 
      price: 18.99, 
      status: 'Delivered', 
      date: 'Oct 24, 2023' 
    },
    { 
      id: '#ORD-9822', 
      name: 'Vegan Salad Bowl', 
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80', 
      price: 11.50, 
      status: 'Processing', 
      date: 'Oct 25, 2023' 
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
