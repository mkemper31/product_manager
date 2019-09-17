import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _httpService: HttpService) { }
  products: Product[] = [];
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    const observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log(data);
      this.products = data['products'];
    })
  }
  deleteProduct(id) {
    const observable = this._httpService.deleteProduct(id);
    observable.subscribe(() => {
      this.getProducts();
    });
  }
}
