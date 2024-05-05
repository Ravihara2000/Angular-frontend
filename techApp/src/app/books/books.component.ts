import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  name="Madol duwa";
  author="Martin wick";

  isDisabled : boolean=false;

  handleClick(){
    this.isDisabled=true;
  }

  handleclick2(){
    alert("hi")
  }
}
