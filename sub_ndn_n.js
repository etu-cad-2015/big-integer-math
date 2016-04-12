/* Вычитание из натурального другого натурального,
умноженного на цифру для случая с неотрицательным результатом */
// Исмаилов Т.Э. 5301
MathLib.sub_ndn_n = function(n1, d, n2) {

  if( MathLib.com_nn_d(n1, n2) != 1 ) { // n1 >= n2
    n2 = MathLib.mul_nd_n(n2, f); // умножаем второе длинное число на цифру f
    n1 = MathLib.sub_nn_n(n1, n2); // вычитаем из первого длинного числа второе
  }
  else { /* В случае если первое меньше второго мы ничего не делаем */ }
  
  return MathLib.finalizeNumber(n1);
}
