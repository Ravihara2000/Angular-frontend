import { Component } from '@angular/core';
interface Book{
  name:string
  author:string
  image:string
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  // name="Madol duwa";
  // author="Martin wick";

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
      name:"Madol duwa",
      author:"Martin wick",
      image:"https://upload.wikimedia.org/wikipedia/en/5/5c/MadolDoova.jpg"
    },
    {
      name:"Madol duwa2",
      author:"Martin wick2",
      image:"https://upload.wikimedia.org/wikipedia/en/5/5c/MadolDoova.jpg"
    },
    {
      name:"Madol duwa3",
      author:"Martin wick3",
      image:"https://upload.wikimedia.org/wikipedia/en/5/5c/MadolDoova.jpg"
    },
  ];

}
