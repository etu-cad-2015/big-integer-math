// Остаток от деления большего натурального числа на меньшее или равное натуральное с остатком (делитель отличен от нуля)
// Выполнил: Клюкин Александр, 5302
// Модуль: N-12

MathLib.mod_nn_n = function (num1, num2) { // на вход два числа
  var quotient = MathLib.div_nn_n(num1, num2);
  //console.log( "mod_nn_n: " + quotient + num1 + num2 + MathLib.mul_nn_n(quotient, num2));
  return MathLib.sub_nn_n(num1, MathLib.mul_nn_n(quotient, num2));
}
