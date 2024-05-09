import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../model/book';
import { Time } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit,OnDestroy {
@Input() book:Book={} as Book
@Output() bookEmitter = new EventEmitter<Book>();


myInterval:any=null;
ngOnInit():void{
this.myInterval=setInterval(
  ()=>{
    console.log('hi ravi');
    
  },1000
)
}

ngOnDestroy(){
  clearInterval(this.myInterval);
  console.log("destroy");
  
}
addToCard(){
  this.bookEmitter.emit(this.book);
}
}
