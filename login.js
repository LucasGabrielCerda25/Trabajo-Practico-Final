
const form = document.getElementById('form');
const emailInput = document.getElementById('emailInput');
const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');
const dateInput = document.getElementById('dateInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const listenedToSongsInput = document.getElementById('listenedToSongsInput');
const eatenNagashiSomenInput = document.getElementById('eatenNagashiSomenInput');
const submitButton = document.getElementById('submitButton');


submitButton.addEventListener('click', validateForm);


function validateForm(event) {
    event.preventDefault(); 
  
    resetInputStyles();
  
    validateEmail();
    validateDate();
    validateUser();
    validatePasswords();
    validateListenedToSongs();
    validateEatenNagashiSomen();
    form.reset();
    const invalidInputs = form.querySelectorAll('.invalid');
    const existingSuccessMessage = document.getElementById('successMessage');
    if (existingSuccessMessage) {
       existingSuccessMessage.remove();
    }

    if (invalidInputs.length === 0) {
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Usuario registrado con éxito';
    successMessage.id = 'successMessage';
    successMessage.style.fontWeight = 'bold';
    successMessage.style.fontSize = 'large';
    successMessage.style.color = 'green';
    passwordInput.setAttribute('placeholder',"Contraseña.");
    confirmPasswordInput.setAttribute('placeholder',"Confirmar contraseña.");
    listenedToSongsInput.setAttribute('placeholder',"Canciones escuchadas.");
    eatenNagashiSomenInput.setAttribute('placeholder',"Kg de Nagashi Somen comido.");
    form.appendChild(successMessage);
    }
  }
function validateUser() {
  const username = usernameInput.value.trim();
  
  if (username === '') {
      setInvalidInputStyle(usernameInput, 'El nombre de usuario es obligatorio.');
  } else {
    usernameInput.setAttribute('placeholder',"Usuario");
  }
}

function validateEmail() {
  const value = emailInput.value;

  if (!isValidEmail(value)) {
    setInvalidInputStyle(emailInput, 'Email inválido.');
  } else {
    emailInput.setAttribute('placeholder',"Email.");
  }
}

function validateDate() {
  const date = dateInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  if (!isValidDate(date, month, year)) {
    setInvalidInputStyle(dateInput, 'Día inválido.');
    setInvalidInputStyle(monthInput, 'Mes inválido.');
    setInvalidInputStyle(yearInput, 'Año inválido');
  } else {
    dateInput.setAttribute('placeholder',"Día.");
    monthInput.setAttribute('placeholder',"Mes.");
    yearInput.setAttribute('placeholder',"Año.");
  }
}

function validatePasswords() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

 
  if (password.length < 6) {
    setInvalidInputStyle(passwordInput, 'La contraseña debe ser de más de 6 carácteres.');
  }
  if (!/\d/.test(password)) {
    setInvalidInputStyle(passwordInput, 'La contraseña debe tener al menos 1 número.');
  }

  // verifica contraseñas
  if (password !== confirmPassword) {
    setInvalidInputStyle(passwordInput, 'Las contraseñas no son iguales.');
    setInvalidInputStyle(confirmPasswordInput, 'Las contraseñas no son iguales.');
  }

  if ((password.length < 6)&&(password == confirmPassword)){
    passwordInput.setAttribute('placeholder',"Contraseña.");
    confirmPasswordInput.setAttribute('placeholder',"Confirmar contraseña.");
  }
}

function validateListenedToSongs() {
  const value = listenedToSongsInput.value;
  if (!Number.isInteger(Number(value))) {
    setInvalidInputStyle(listenedToSongsInput, 'Escriba un valor correcto de canciones escuchadas.');
  }
}

function validateEatenNagashiSomen() {
  const value = eatenNagashiSomenInput.value;

  // Se asegura que el valor sea del tipo float
    if (value !== '') {
      if (isNaN(parseFloat(value))) {
        setInvalidInputStyle(eatenNagashiSomenInput, 'Ingrese un valor numérico correcto.');
      }
  }
}

  // Cambia el estilo de los inputs a rojo si son incorrectos
  function setInvalidInputStyle(inputElement, errorMessage) {
    inputElement.style.background = 'rgba(255, 0, 0, 0.1)';
    inputElement.value = '';
    inputElement.placeholder = errorMessage;
    inputElement.style.outline = '2px solid red';
    inputElement.classList.add('invalid'); // Agrega una clasificación de CSS para más claridad
  }

  // Regresa los estilos a la normalidad
  function resetInputStyles() {
    const inputFields = form.querySelectorAll('input');
    inputFields.forEach(input => {
      input.style.background = '';
      input.placeholder = input.getAttribute('placeholder');
      input.style.outline = '';
      input.classList.remove('invalid'); // Remueve la clase de css
    });
  }

// Valida que el email sea válido con magia negra regex
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Valida que sea una fecha válida
function isValidDate(date, month, year) {
  const isValidDay = /^\d{1,2}$/.test(date) && parseInt(date) >= 1 && parseInt(date) <= 31;
  const isValidMonth = /^\d{1,2}$/.test(month) && parseInt(month) >= 1 && parseInt(month) <= 12;
  const isValidYear = /^\d{4}$/.test(year) && parseInt(year) !== 0 && parseInt(year) <= new Date().getFullYear();
  let result = false;

  if (isValidMonth && isValidYear) {
    const monthNumber = parseInt(month);
    const isLeapYear = (parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0) || parseInt(year) % 400 === 0;

    if (monthNumber === 2 || monthNumber === "02") {
      if (isLeapYear) {
        result = isValidDay && parseInt(date) >= 1 && parseInt(date) <= 29;
      } else {
        result = isValidDay && parseInt(date) >= 1 && parseInt(date) <= 28;
      }
    } else if (monthNumber % 2 === 0) {
      result = isValidDay && parseInt(date) >= 1 && parseInt(date) <= 31;
    } else {
      result = isValidDay && parseInt(date) >= 1 && parseInt(date) <= 30;
    }
  }

  return result;
}






  

