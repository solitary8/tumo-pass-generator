/**
 * Génère et retourne un mots de passe.
 *
 * Il est à vous de faire fonctionner cette fonctions.
 *
 * @param {number} length La taille que doit faire le mots de passe.
 * @returns Un mot de passe sécurisé
 */
function generatePassword(length) {
  let pass = '';

  return pass;
}

/**----------------------------------- */
/**----------------------------------- */
/**----------------------------------- */
/**----------NE PAS MODIFIER---------- */
/**----------------------------------- */
/**----------------------------------- */
/**----------------------------------- */

/**
 * Retourne un élément aléatoire dans une liste donnée.
 *
 * @param {Array} list La liste dont un élément va être choisi
 * @returns Un élément aléatoire
 */
function arrayRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/**
 * Retourne un nombre aléatoire entre min et max.
 *
  @param {8} 
  @param {65} 
  @returns 9
 */
function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

/**
  @returns a
 */
function randomLowerCase() {
  return arrayRandom([
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]);
}

/**
  @returns A
 */
function randomUpperCase() {
  return randomLowerCase().toUpperCase();
}

/**
  @returns 4
 */
function randomNumber() {
  return arrayRandom(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
}

/**
  @returns &
 */
function randomSymbol() {
  return arrayRandom([
    '#',
    '!',
    '$',
    '_',
    '-',
    '~',
    '+',
    '{',
    '}',
    '[',
    ']',
    '/',
    '\\',
    '@',
    '=',
    '^',
    '%',
    '*',
    ':',
    ';',
    ',',
    '?',
    '&',
    "'",
  ]);
}

/**
 * Copie le mot de passe actuel dans le presse-papiers.
 */
function copyToClipboard() {
  const pass = document.getElementById('password-output');

  navigator.clipboard.writeText(pass.textContent);
}

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('pass-length');
  const label = document.getElementById('pass-length-display');

  label.textContent = slider.value;

  slider.addEventListener('input', () => {
    label.textContent = slider.value;
    refreshPassword();
  });

  refreshPassword();
});

/**
 * @returns {boolean}
 */
function shouldIncludeLowerCase() {
  const checkbox = document.getElementById('inc-lowercase');

  return checkbox.checked;
}

/**
 * @returns {boolean}
 */
function shouldIncludeUpperCase() {
  const checkbox = document.getElementById('inc-uppercase');

  return checkbox.checked;
}

/**
 * @returns {boolean}
 */
function shouldIncludeNumbers() {
  const checkbox = document.getElementById('inc-numbers');

  return checkbox.checked;
}

/**
 * @returns {boolean}
 */
function shouldIncludeSymbols() {
  const checkbox = document.getElementById('inc-symbols');

  return checkbox.checked;
}

/**
 * Cette fonction est appelée à chaque fois que le mot de passe doit ête recalculé.
 */
function refreshPassword() {
  const slider = document.getElementById('pass-length');
  const output = document.getElementById('password-output');

  output.textContent = generatePassword(slider.value);
}
/**
 * Generates and returns a password.
 *
 * @param {number} length The length of the password
 * @returns A secure password
 */
function generatePassword(length) {
  let pass = '';
  let typesArr = [];

  if (shouldIncludeLowerCase()) {
    typesArr.push(randomLowerCase);
  }
  if (shouldIncludeUpperCase()) {
    typesArr.push(randomUpperCase);
  }
  if (shouldIncludeNumbers()) {
    typesArr.push(randomNumber);
  }
  if (shouldIncludeSymbols()) {
    typesArr.push(randomSymbol);
  }

  for (let i = 0; i < length; i++) {
    const func = arrayRandom(typesArr);
    pass += func();
  }

  return pass;
}
