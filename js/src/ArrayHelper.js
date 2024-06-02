// Objekt mit Objektmethoden unter Verwendung der Objekt-Literal-Schreibweise
/* Seit ES2015 können Sie bei Verwendung der Objekt-Literal-Schreibweise 
bei der Definition von Objektmethoden das Schlüsselwort function und den 
vorausgehenden Doppelpunkt auch weglassen. */
const ArrayHelper = {
  summe: function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
    // return array.reduce((sum, value) => sum + value, 0);
  },
  produkt(array) {
    let prod = 1;
    for (let i = 0; i < array.length; i++){
      prod *= array[i];
    }
    return prod;
    // return array.reduce((prod, value) => prod * value, 1);
  },
};
