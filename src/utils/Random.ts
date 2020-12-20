import { Book } from "@entities/Book";

export class Random {
  static getISBN() {
    let isbn = '';

    while (isbn.length < 13) {
      isbn += Random.getRandomInt(0, 9);
    }

    return isbn;
  }


  static getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getPublicationDate(): Date {
    return Random.randomDate(new Date("01-01-1980"), new Date())
  }

  static randomDate(start: Date, end: Date) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  /**
   * Returns and removes random entry from set
   * @param set
   */
  static fromSet<T>(set: Set<T>): T {
    const temp = Array.from(set)
    const id = Random.getRandomInt(0, temp.length - 1);
    const result = temp[id];

    set.delete(result);

    return result;
  }
}
