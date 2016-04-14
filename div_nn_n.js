// Частное от деления большего натурального числа на меньшее или равное натуральное с остатком (делитель отличен от нуля)
// Связные модули: div_nn_dk, sub_ndn_n, mul_nk_n, com_nn_d.
// Неботов Дмитрий, 5301.

MathLib.div_nn_n = function(n1, n2){
    var quotient = {d: [], s: 1}; // частное
    var ranks = n1.b.length - n2.b.length; // максимально возможная длина частного (в длине неучитывается нулевой элемент)
    var clone_n1 = cloneNumber(n1); // копируем для изменения

    while (ranks >= 0) // проходим все ранги частного от старшего разряда к нулевому
    {
        var ranks_n2 = mul_nk_n(ranks, n2); // делаю ранг n2 таким же как у clone_n1
        if(com_nn_d(clone_n1, ranks_n2) != 1) // если clone_n1 получится больше, то находим нужный коэффициент и вычитаем n2 * коэффициент из n1
        {
            quotient.d[ranks] = div_nn_dk(clone_n1, n2); // находим коэффициент
            clone_n1 = sub_ndn_n(clone_n1, quotient.d[ranks], n2); // вычитаем
        }
        else quotient.d[ranks] = 0; // если n2 будет больше clone_n1, то коэффициент 0
        ranks--;
    }
    return MathLib.finalizeNumber(quotient); // удаляем нули в старших разрядах и возвращаем результат
}
