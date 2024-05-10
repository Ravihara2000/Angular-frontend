import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { BooksComponent } from './books.component';
import { BooksService } from './books.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [BookComponent, BooksComponent, CartComponent],
  imports: [CommonModule],
  providers: [BooksService],
  exports: [BooksComponent,CartComponent],
})
export class BooksModule {}
