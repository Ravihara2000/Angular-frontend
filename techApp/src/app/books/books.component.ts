import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BooksService } from './books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
  
})
export class BooksComponent implements OnInit {

  bookService = new BooksService();


  // name="Madol duwa";
  // author="Martin wick";

  ngOnInit(): void {
      console.log('oninit');
      this.books=this.booksServices.getBooks();
      
  }
  constructor(private booksServices: BooksService){
    console.log('constructor');
  
    
  }

  isDisabled : boolean=false;

  // handleClick(){
  //   this.isDisabled=true;
  // }

  // handleclick2(){
  //   alert("hi")
  // }


  myName: String="";
  // handleInput(event:any){
  //   console.log(event?.target);
  //   this.myName=event?.target.value;
  // }

  isShowing:boolean=true;
  toggleBooks(){
    this.isShowing=!this.isShowing;
  }

  books:Book[]=[
    
  ];

  card: Book[]=[];
  addToCard(book:Book){
    this.card.push(book);
    console.log(this.card);
    
    
  }
}
