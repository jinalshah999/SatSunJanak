import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  category: string = 'xyz';
  productsarr: Product[] = [
    new Product(
      1,
      'omega',
      100000,
      'http://cdn2.jomashop.com/media/catalog/product/o/m/omega-seamaster-planet-ocean-black-dial-men_s-watch-232.30.42.21.01.001_1.jpg',
      5
    ),
    new Product(
      2,
      'timex',
      2000,
      'http://ecx.images-amazon.com/images/I/51Ezfl22mYL._AC_UL260_SR200,260_.jpg',
      10
    ),
    new Product(
      3,
      'titan',
      12000,
      'http://ecx.images-amazon.com/images/I/51fnWFY3s3L._AC_UL260_SR200,260_.jpg',
      15
    ),
    new Product(
      4,
      'fossil',
      18000,
      'http://i.ebayimg.com/00/s/NjAwWDYwMA==/z/ZN8AAOSwd4tT5KNF/$_32.JPG',
      8
    ),
    new Product(
      5,
      'rolex',
      125000,
      'http://dvciknd2kslsk.cloudfront.net/images/watchfinderimages/Watch/Rolex/GMT-Master-II/76399-2005568029.jpg',
      3
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onMyEvent(value) {
    console.log('I am from parent', value);
  }
}
