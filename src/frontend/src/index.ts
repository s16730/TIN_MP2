import '@/scss/styles.scss';
import { FormValidator } from "./script/FormValidator";
import { Form } from "./script/Form";


window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('form').forEach(form => new Form(form))
});
