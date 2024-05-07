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

}
