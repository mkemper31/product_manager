import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../models/product';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product = new Product();
  reply: any = {};
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.product = new Product();
    this._route.params.subscribe((params: Params) => {
        console.log(params['id']);
        let id = params['id'];
        this.findProduct(id);
    });
  }
  findProduct(id) {
    const observable = this._httpService.getProduct(id);
    observable.subscribe(data => {
      this.product = data['product'];
    });
  }
  onSubmit(form: NgForm) {
    const observable = this._httpService.updateProduct(this.product);
    observable.subscribe(data => {
      console.log('reply:', data);
      if(data['errors']) {
        this.reply = data['errors'];
        console.log(this.reply);
      }
      else {
        this.reply = {};
        this.findProduct(this.product._id);
        form.reset();
      }
    });
  }
}
