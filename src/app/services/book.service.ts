import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[]

  constructor() {
    this.books = [
      {
        ISBN: '111-000-111',
        Book: 'Captains daughter',
        Author: 'Pushkin A.S.',
        Publisher: 'San Diego',
        Year: 1982
      },
      {
        ISBN: '111-000-222',
        Book: 'Kapitanning qizi',
        Author: 'Pushkin A.S.',
        Publisher: 'Tashkent',
        Year: 1945
      },
      {
        ISBN: '111-000-333 ',
        Book: 'Капитанская дочка',
        Author: 'Пушкин А.С.',
        Publisher: 'Москва',
        Year: 1835
      },
    ] 
  }

  getBooks(): Book[] {
    return this.books
  }

  deleteBook(id) {
    this.books = this.books.filter((v, i) => i !== id)
  }

  addBook(ISBN, Book, Author, Publisher, Year) {
    this.books.push({
      ISBN, Book, Author, Publisher, Year
    })
  }
}