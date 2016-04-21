/* Вычитание из натурального другого натурального,
умноженного на цифру для случая с неотрицательным результатом */
// Исмаилов Т.Э. 5301
MathLib.sub_ndn_n = function(num1, d, num2) {
	
	n1 = MathLib.cloneNumber (num1);
	n2 = MathLib.cloneNumber (num2);

  if( MathLib.com_nn_d(n1, n2) != 1 ) { // n1 >= n2
    n2 = MathLib.mul_nd_n(n2, d); // умножаем второе длинное число на цифру f
    n1 = MathLib.sub_nn_n(n1, n2); // вычитаем из первого длинного числа второе
  }
  else n1 = MathLib.sub_nn_n(n2, n1); // вычитыаем из второго длинного числа первое

  return MathLib.finalizeNumber(n1);
}
