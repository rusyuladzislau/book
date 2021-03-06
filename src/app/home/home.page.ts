import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/Book'
import { BookService } from './../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  books: Book[]

  constructor(
    private bs: BookService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.books = this.bs.getBooks()
  }

  onAddBookPage() {
    this.router.navigate(['/book'])
  }

  deleteBook(id) {
    this.books = this.books.filter((v, i) => i !== id)
    
    this.bs.deleteBook(id)
  }
}
