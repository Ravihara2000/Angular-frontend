import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  // name="Madol duwa";
  // author="Martin wick";

  ngOnInit(): void {
      console.log('oninit');
      
  }
  constructor(){
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
    {
      name:"madol duwa",
      author:"martin wick",
      image:"https://upload.wikimedia.org/wikipedia/en/5/5c/MadolDoova.jpg",
      price:100
    },
    {
      name:"madol duwa2",
      author:"martin wick2",
      image:"https://upload.wikimedia.org/wikipedia/en/5/5c/MadolDoova.jpg",
      price:123
    },
    {
      name:"madol duwa3",
      author:"martin wick3",
      image:"https://upload.wikimedia.org/wikipedia/en/5/5c/MadolDoova.jpg",
      price:456
    },
  ];

  card: Book[]=[];
  addToCard(book:Book){
    this.card.push(book);
    console.log(this.card);
    
    
  }
}
