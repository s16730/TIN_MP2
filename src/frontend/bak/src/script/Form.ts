import { FormValidator } from "../../../src/services/FormValidator";
import { DataObject, ErrorObject } from "../../../src/types";

export class Form {
  private readonly element: HTMLFormElement;
  private url: string | null;
  private validator: FormValidator;

  private formErrors: HTMLDivElement[] = [];

  constructor(element: HTMLFormElement) {
    this.element = element;
    this.url = this.element.getAttribute("data-url");
    this.validator = FormValidator.instance;

    this.element.addEventListener('submit', e => e.preventDefault());

    this.element.addEventListener(FormValidator.EVENT, async (e) => {
      e.preventDefault();
      this.formErrors.forEach(error => error.remove());

      const data: DataObject = {};
      const formData = new FormData(this.element);

      formData.forEach(((value, key) => data[key] = value))

      if (this.url) {
        const response = await fetch(this.url, {
          method: "POST",
          cache: "no-cache",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        const responseData = await response.json();

        if (responseData.errors) {
          this.handleErrors(responseData.errors)
        }

        if (responseData.redirect) {
          location.href = responseData.redirect;
        }

        if (responseData.message) {
          this.displayMessage(responseData.message);
        }
      }
    })
  }

  private displayMessage(message: string) {
    const element = document.createElement('div');
    element.classList.add('message');

    element.innerText = message;

    const close = document.createElement('div');
    close.classList.add('close')
    close.addEventListener('click', () => {
      element.remove();
    })
    element.append(close)

    this.element.prepend(element);
  }

  private handleErrors(errors: ErrorObject[]) {
    errors.forEach(error => {
      const elem = this.element.querySelector(`[name="${error.name}"]`)

      elem?.parentElement?.append(this.createError(error.message));
    })

  }

  private createError(message: string): HTMLDivElement {
    const error = document.createElement("div");
    error.classList.add("error");
    error.innerText = message;

    error.addEventListener('click', () => error.remove())

    this.formErrors.push(error)

    return error;
  }
}
