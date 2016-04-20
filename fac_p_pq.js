// Вынесение из многочлена НОК знаменателей коэффициентов и НОД числителей
// Выполнил: Клюкин Александр, гр. 5302
// chislitel - числитель , noz - наименьший общий знаменатель.
// Модуль: P-7
function FAC_P_PQ(A, B) {

    var nok = B[0].noz;
    var nod = TRANS_Z_N(B[0].chislitel);
    
    for (var i = 1; i < DEG_P_N(); i++) { //функция степени многочлена
        nok = LCM_NN_N(nok, B[i].noz);  // НОК знаменателей
        nod = GCF_NN_N(nod, TRANS_Z_N(B[i].chislitel));  // НОД числителей
    }

    // return ????
}

