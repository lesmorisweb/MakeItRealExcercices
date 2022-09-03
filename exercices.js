/**
 * Escribe una función llamada numDuplicados que reciba un string y
 * retorne el número de caracteres que aparecen más de una vez.
 *
 **/
function numDuplicados(text) {
  const letterObject = {};

  for (let i = 0; i < text.length; i++) {
    if (letterObject[text[i]]) {
      letterObject[text[i]]++;
    } else {
      letterObject[text[i]] = 1;
    }
  }

  const itemsArray = Object.entries(letterObject);
  let result = 0;

  for (let i = 0; i < itemsArray.length; i++) {
    if (itemsArray[i][1] > 1) {
      result++;
    }
  }
  return result;
}

/**
 * Escribe una función llamada frecuencias que reciba una cadena de
 * texto y retorne un objeto con el número de veces que aparece cada
 * caracter (exceptuando el espacio en blanco)
 */
function frecuencias(text) {
  const textObject = {};

  let cutString = text.split("").forEach((letter) => {
    if (letter !== " ") {
      if (textObject[letter]) {
        textObject[letter] += 1;
      } else {
        textObject[letter] = 1;
      }
    }
  });
  return textObject;
}

/**
 * Crea una función llamada caracteresEnComun que recibe dos argumentos: str1 y str2. La función debe
 * retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.
 *
 */
function caracteresEnComun(str1, str2) {
  const str1Array = str1.split("");
  const commonElements = str1Array
    .filter((letter) => letter !== " ")
    .filter((word) => str2.includes(word));
  const result = [];

  commonElements.forEach((commonElementArrayLetter) => {
    if (!result.some((resultWord) => resultWord === commonElementArrayLetter)) {
      result.push(commonElementArrayLetter);
    }
  });
  return result;
}

/**​​Escribir una función llamada ajustarTexto​ que reciba dos argumentos:  un string y un número (que
 * representa una longitud).  La función debe retornar la cadena ajustada a la longitud recibida. Si
 * la longitud de la cadena es mayor al número, debes recortar la cadena. De lo contrario agrega espacios
 * en blanco hasta completar la longitud.
 *
 * si num<letter.length letter.slice 0,num
 * si no letter.push ""
 */

function ajustarTexto(letter, num) {
  let result = letter.slice();

  if (result.length > num) {
    return result.slice(0, num);

  } else { 
    for (let i = result.length; i <= num; i++) {
      result += " ";
    }
  }
  return result;
}
