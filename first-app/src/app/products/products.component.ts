import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productNames : string[] = ['Pen', 'Pencil', 'Marker', 'Scribble Pad'];

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewClick(productName : string){
    this.productNames.push(productName);
  }

  onRemoveClick(idx : number){
    this.productNames.splice(idx, 1);
  }

}
 