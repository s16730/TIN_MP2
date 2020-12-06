export class FormValidator {
  private static _instance: FormValidator;

  private _errors: HTMLElement[] = [];

  static get instance(): FormValidator {
    if (!FormValidator._instance) {
      FormValidator._instance = new FormValidator()
    }

    return FormValidator._instance;
  }


  constructor() {
    document.querySelectorAll<HTMLFormElement>('form').forEach(form => {
      form.addEventListener('submit', (evt) => {
        this.validateAll();

        if (form.querySelectorAll('.error').length > 0) {
          evt.preventDefault();
        }
        evt.preventDefault();
      })
    })
  }

  private validate(elem: HTMLElement): string[] {
    const validations = elem.getAttribute("data-validate")?.split(" ");
    const errors: string[] = [];

    if (validations) {
      validations.forEach((validation: string) => {
        switch (validation) {
          case 'required':
            this.checkRequired(elem, errors);
            break;
          case 'length':
            this.checkLength(elem, errors);
            break;
          case 'email':
            this.checkEmail(elem, errors);
            break;
        }
      })
    }

    return errors;
  }

  private checkRequired(elem: HTMLElement, errors: string[]) {
    if (elem instanceof HTMLInputElement) {
      if (elem.value.length === 0 && !elem.checked) {
        errors.push("Pole wymagane")
      }
    }
  }

  private addError(elem: HTMLElement, errors: string[]) {
    const error = document.createElement('div');

    error.classList.add("error")

    errors.forEach(message => {
      error.innerHTML += message + "<br/>";
    })

    error.addEventListener('click', () => {
      error.remove();
    })

    elem.parentElement?.append(error)
    this._errors.push(error)
  }

  private validateAll() {
    this._errors.forEach(error => error.remove())
    const elements = document.querySelectorAll<HTMLElement>('[data-validate]')

    elements.forEach((elem) => {
      const result = this.validate(elem);

      if (result.length > 0) {
        this.addError(elem, result)
      }
    })
  }

  private checkLength(elem: HTMLElement, errors: string[]) {
    if (elem instanceof HTMLInputElement) {
      if (elem.value.length < 2 || elem.value.length > 60) {
        errors.push("Pole musi zawierać pomiędzy 2 i 60 znaków")
      }
    }
  }

  private checkEmail(elem: HTMLElement, errors: string[]) {
    if (elem instanceof HTMLInputElement) {
      const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!regex.test(elem.value)) {
        errors.push("Pole musi zawierać adres email")
      }
    }
  }
}
