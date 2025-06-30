import { Component, input } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { GenreLiterary } from '../book/book';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-literary-genre',
  imports: [CommonModule, BookComponent],
  templateUrl: './literary-genre.component.html',
  styleUrl: './literary-genre.component.css',
})
export class LiteraryGenreComponent {
  genrer = input.required<GenreLiterary>();
}
