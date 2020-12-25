import { ErrorObject } from "@/types";

export class Validator {
  public static isEmail(field: string, value: string): ErrorObject | null {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!regex.test(value)) {
      return {
        name: field,
        message: "Pole musi zawierać adres email",
      }
    }

    return null;
  }

  public static isFilled(field: string, value: string): ErrorObject | null {

    if (0 === value.length) {
      return {
        name: field,
        message: "Pole jest wymagane",
      }
    }

    return null;
  }

  public static isInCharacterRange(field: string, value: string, min: number, max: number): ErrorObject | null {

    if (value.length < min || value.length > max) {
      return {
        name: field,
        message: `Pole musi zawierać więcej niż ${min} oraz mniej niż ${max} znaków`,
      }
    }

    return null;
  }

  static isDate(field: string, value: string): ErrorObject | null {

    if (Number.isNaN(Date.parse(value))) {
      return {
        name: field,
        message: "Pole musi zawierać datę",
      }
    }

    return null;
  }
}
