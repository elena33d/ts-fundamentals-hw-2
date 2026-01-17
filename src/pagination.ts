export const PER_PAGE = 15;

export default class Pagination {
  current: number;  // текущая страница
  perPage: number;  // сколько элементов на страницу
  totalHits: number; // всего элементов

  constructor(perPage: number = 20) {
    this.current = 1;
    this.perPage = perPage;
    this.totalHits = 0;
  }

  next(): void {
    this.current += 1;
  }

  reset(): void {
    this.current = 1;
  }

  isEnd(totalHits: number): boolean {
    this.totalHits = totalHits;
    return this.current * this.perPage >= totalHits;
  }
}
