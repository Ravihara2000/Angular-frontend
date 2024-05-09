import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){
    return[
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
    ]
  }
}
