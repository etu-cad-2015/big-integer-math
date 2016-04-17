// Наименьшее общее кратное двух натуральных чисел.
// Входные данные: два натуральных числа
// Выходные данные: одно натуральное число - НОК.
// -- Раков Константин, 5302.
MathLib.lcm_nn_n = function(numb1, numb2)
{
  // НОК = (numb1 * numb2) / НОД(numb1, numb2)
  return MathLib.div_nn_n(MathLib.mul_nn_n(numb1, numb2), 
                          MathLib.gcf_nn_n(numb1, numb2));
};
