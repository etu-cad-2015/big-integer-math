//Created by Konstantin Rakov (5302) on 10.04.2016.
//Наименьшее общее кратное двух натуральных чисел
//Входные данные: два натуральных числа
//Выходные данные: одно натуральное число - НОК
function lcm_nn_n(numb1, numb2)
{
  var lcm ={};

  //НОК = (numb1 * numb2) / НОД(numb1, numb2)
  lcm.d = div_nn_n(mul_nn_n(numb1, numb2), gcf_nn_n(numb1, numb2));
  lcm.s = 1;

  return lcm;
};
