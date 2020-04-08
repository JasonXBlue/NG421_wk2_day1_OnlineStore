import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  @Input() product = {
    price: "",
    name: "",
    description: "",
    reviews: "",
    stars: "",
    imgUrl: "",
    rating: "",
  };

  @Output()
  productAdded: EventEmitter<{ product }> = new EventEmitter<{ product }>();

  productAdd() {
    this.product = this.product;
  }

  constructor() {}

  ngOnInit() {}
}
