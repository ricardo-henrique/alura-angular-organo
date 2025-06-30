import { Component, OnInit } from '@angular/core';
import { Book, GenreLiterary } from '../book/book';
import { book } from '../../mockBooks';
import { LiteraryGenreComponent } from '../literary-genre/literary-genre.component';

@Component({
  selector: 'app-book-list',
  imports: [LiteraryGenreComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  genres: GenreLiterary[] = [];
  bookPerGerer: Map<string, Book[]> = new Map();

  ngOnInit(): void {
    this.bookPerGerer = new Map();
    book.forEach((book) => {
      const genrerId = book.gender.id;
      if (!this.bookPerGerer.has(genrerId)) {
        this.bookPerGerer.set(genrerId, []);
      }
      this.bookPerGerer.get(genrerId)?.push(book);
    });

    this.genres = [
      {
        id: 'romance',
        value: 'Romance',
        book: this.bookPerGerer.get('romance') ?? [],
      },
      {
        id: 'misterio',
        value: 'Mistério',
        book: this.bookPerGerer.get('misterio') ?? [],
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        book: this.bookPerGerer.get('fantasia') ?? [],
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        book: this.bookPerGerer.get('ficcao-cientifica') ?? [],
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        book: this.bookPerGerer.get('tecnicos') ?? [],
      },
    ];
    console.log(this.bookPerGerer);
  }
}
