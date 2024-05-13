// Objekt mit Objektmethoden unter Verwendung der Objekt-Literal-Schreibweise
/* Seit ES2015 können Sie bei Verwendung der Objekt-Literal-Schreibweise 
bei der Definition von Objektmethoden das Schlüsselwort function und den 
vorausgehenden Doppelpunkt auch weglassen. */
const ArrayHelper = {
  summe(array) {
    return array.reduce((sum, value) => sum + value, 0);
  },
  produkt(array) {
    return array.reduce((produkt, value) => produkt * value, 1);
  },
  summeEasy: function (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i]; // sum = sum + array[i];
    }
    return sum;
  },
};
