// Умножение натуральных чисел.
// Связанные модули: mul_nd_n, mul_nk_n, add_nn_n.
// Гараев Андрей, 5301.

MathLib.mul_nn_n = function(n1, n2) {
  var n3 = { d: [], s: 1 };

  /* Да простят меня за такую вложенность функций...
  Идём из глубины. Умножаем число n1 на цифру числа n2 в позиции
  разряда digit - n2.d[digit]. Полученное число умножаем на десять в степени,
  равной соответствующему номеру разряда digit. Второе полученное число
  прибавялем к результату n3. */
  for (var digit = 0; digit < n2.d.length; digit++) {
    n3 = MathLib.add_nn_n( MathLib.mul_nk_n( MathLib.mul_nd_n( n1, n2.d[digit] ), digit ), n3 );
  }

  /* Определение знака результата. */
  n3.s = n1.s * n2.s;

  return MathLib.finalizeNumber(n3);
}
