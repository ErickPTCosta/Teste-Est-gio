// Escreva um programa que inverta os caracteres de um string.


// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;

const minha_string = "Eu quero passar nessa vaga"

let string_invertida = ''

for (let i = minha_string.length -1; i>=0; i--) {
    string_invertida += minha_string[i]
}

console.log('String Original: ', minha_string);
console.log('String Invertida: ', string_invertida);