import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
const DELETED_KEY = 'deleted';
// import { Category, categories } from '../categories';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    const deletedStr = localStorage.getItem(DELETED_KEY);
    
    if (deletedStr) {
      this.deleted = JSON.parse(deletedStr);
    }
  }

  products = [...products];
  deleted: number[] = []

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productCFromRoute = (routeParams.get('productsCategory'));

    this.products = products.filter(p => p.category === productCFromRoute && !this.deleted.find(id => id === p.id))
    console.log(this.deleted)
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  counterLike(p: Product) {
    p.like++;

    console.log(p.like)
  }


  DeleteItem(id : number) {
    this.deleted.push(id)

    localStorage.setItem(DELETED_KEY, JSON.stringify(this.deleted));
    console.log(localStorage)

    this.ngOnInit()
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/