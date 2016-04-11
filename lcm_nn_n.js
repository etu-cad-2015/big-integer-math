//Created by Konstantin Rakov (5302) on 10.04.2016.
//Наименьшее общее кратное двух натуральных чисел
//Входные данные: два натуральных числа
//Выходные данные: одно натуральное число - НОК
function LCM_NN_N(numb1, numb2)
{
  var LCM ={};

  //НОК = (numb1 * numb2) / НОД(numb1, numb2)
  LCM.d = DIV_NN_N(MUL_NN_N(numb1, numb2), GCF_NN_N(numb1, numb2));
  LCM.s = 1;

  return LCM;
};