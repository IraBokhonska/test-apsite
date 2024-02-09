const form = document.querySelector(".form");
const inputFields = form.getElementsByClassName("form-control");

for (const item of inputFields) {
  item.addEventListener("blur", (event) => {
    validateForm(event);
  });
}

const setError = (element, message) => {
  const errorSection = element.parentElement.querySelector(".error");
  errorSection.innerText = message;
  element.classList.add("invalid");
  element.classList.remove("valid");
};

const setValid = (element) => {
  const errorSection = element.parentElement.querySelector(".error");
  errorSection.innerText = "";
  element.classList.remove("invalid");
  element.classList.add("valid");
};

const validateName = (name) => {
  if (name.value === "") {
    setError(name, "Необхідно вказати iм'я");
  } else {
    setValid(name);
  }
};

const validateTel = (tel) => {
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  if (tel.value === "") {
    setError(tel, "Необхідно вказати номер телефону");
  } else if (!regex.test(tel.value)) {
    setError(tel, "Неправильний номер телефону");
  } else {
    setValid(tel);
  }
};

const validateMessage = (fmessage) => {
  if (fmessage.value === "") {
    setError(fmessage, "Напишіть коротке повідомлення");
  } else {
    setValid(fmessage);
  }
};

const validateForm = (event) => {
  switch (event.target.id) {
    case "name":
      validateName(event.target);
      break;
    case "tel":
      validateTel(event.target);
      break;
    case "fmessage":
      validateMessage(event.target);
      break;
    default:
      alert("Помилка у заповненні форми!");
  }
};
