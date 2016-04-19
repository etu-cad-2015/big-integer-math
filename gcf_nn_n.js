// Лобарев Андрей Александрович 5302
// Модуль N-13 (gcf_nn_n) Нахождение НОД натуральных чисел

MathLib.gcf_nn_n = function(a ,b) {

  var tmp;                      // Переменная для обмена местами a и b в случае, если a < b

  switch (MathLib.com_nn_d(a, b)) {    // проверяем, какое из чисел 
                                       // больше, вызывая модуль com_nn_d

    case 0: return b;             // 0 - числа равны, возвращаем b

    case 1:                       // 1 - a < b, меняем местами a и b
            tmp = a;
            a = b;
            b = tmp;

    case 2:                       // 2 - a > b, переходим к алгоритму Евклида
            var q;                      // переменная для хранения последнего остатка

            while (1) {
              q = MathLib.mod_nn_n(a, b);       // берем остаток от a / b

              if (MathLib.nzer_n_b(q)) {        // проверяем остаток на равенство нулю
                a = b;                  // если не равен, переходим к следующему
                b = q;                  // шагу алгоритма Евклида
              }
              else return b;            // если остаток равен нулю, возвращаем b
            }

    default: 
            console.log("in function gcf_nn_n: function com_nn_d \
                has returned an incorrect value"); 
              // если com_nn_d возвращает неверное значение,
              // выводим сообщение
  }        
}
