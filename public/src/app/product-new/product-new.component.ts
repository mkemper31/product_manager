import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product';
import { HttpService } from '../http.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product = new Product();
  reply: any = {};
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form);
    if (form.valid) {
      const observable = this._httpService.createProduct(form.value);
      observable.subscribe(data => {
        console.log('reply:', data);
        if(data['errors']) {
          this.reply = data['errors'];
          console.log(this.reply);
        }
        else {
          this.reply = {};
          this.product = new Product();
          form.reset();
        }
      });
    }
  }
}
