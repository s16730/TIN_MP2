export class ArrayHelper {
  static intersect(a: any[], b: any[]) {

    return a.filter(entry => b.find((elem) => elem == entry))
  }
}
