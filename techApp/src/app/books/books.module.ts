import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from '../book/book.component';
import { BooksComponent } from './books.component';
import { BooksService } from './books.service';

@NgModule({
  declarations: [BookComponent, BooksComponent],
  imports: [CommonModule],
  providers: [BooksService],
  exports: [BooksComponent],
})
export class BooksModule {}
