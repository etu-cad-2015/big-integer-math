// Частное от деления большего натурального числа на меньшее или равное натуральное с остатком (делитель отличен от нуля)
// Связные модули: div_nn_dk, sub_ndn_n, mul_nk_n, com_nn_d.
// Неботов Дмитрий, 5301.

MathLib.div_nn_n = function(n1, n2){
    var quotient = {d: [], s: 1}; // частное
    var ranks = n1.d.length - n2.d.length; // максимально возможная длина частного (в длине неучитывается нулевой элемент)
    
    // копируем для изменения
    var clone_n1 = MathLib.cloneNumber(n1); 

    while (ranks >= 0) // проходим все ранги частного от старшего разряда к нулевому
    {
        
var ranks_n2 = MathLib.mul_nk_n(n2, ranks); // делаю ранг n2 таким же как у clone_n1
        // если clone_n1 получится больше, 
        // то находим нужный коэффициент и вычитаем n2 * коэффициент из n1
        if (MathLib.com_nn_d(clone_n1, ranks_n2) != 1) 
        {
            quotient.d[ranks] = MathLib.div_nn_dk(clone_n1, n2); // находим коэффициент
            clone_n1 = MathLib.sub_ndn_n(clone_n1, quotient.d[ranks], ranks_n2); // вычитаем
        }
        else quotient.d[ranks] = 0; // если n2 будет больше clone_n1, то коэффициент 0
        ranks--;
    }
    return MathLib.finalizeNumber(quotient); 
    // удаляем нули в старших разрядах и возвращаем результат
}
