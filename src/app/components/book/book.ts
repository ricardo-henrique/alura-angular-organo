export interface Book {
  title: string;
  authorship: string;
  image: string;
  favorite: boolean;
  gender: GenreLiterary;
}

export interface GenreLiterary {
  id: string;
  value: string;
  book: Book[];
}
