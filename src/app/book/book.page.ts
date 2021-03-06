import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../models/Book';
import { BookService } from './../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  inputISBN: string = ""
  inputBook: string = ""
  inputAuthor: string =""
  inputPublisher: string = ""
  inputYear: number

  form: FormGroup

  constructor(
    private bs: BookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      inputISBN: new FormControl(),
      inputBook: new FormControl(),
      inputAuthor: new FormControl(),
      inputPublisher: new FormControl(),
      inputYear: new FormControl() 
    })
  }

  addBook() {
    this.bs.addBook(
      this.form.value.inputISBN,
      this.form.value.inputBook,
      this.form.value.inputAuthor,
      this.form.value.inputPublisher,
      this.form.value.inputYear,
    )

    this.router.navigate(['/home'])
  }

}
