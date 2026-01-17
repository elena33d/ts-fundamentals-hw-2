import { PER_PAGE } from "./pixabay-api"; // если хочешь брать значение из api-файла

export default class Pagination {
  private readonly perPage: number;
  private page: number;

  constructor(perPage: number = PER_PAGE) {
    this.perPage = perPage;
    this.page = 1;
  }

  // геттер для чтения текущей страницы
  get current(): number {
    return this.page;
  }

  next(): void {
    this.page += 1;
  }

  reset(): void {
    this.page = 1;
  }

  isEnd(totalHits: number): boolean {
    return this.page * this.perPage >= totalHits;
  }
}
