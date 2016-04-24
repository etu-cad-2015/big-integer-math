// Вынесение из многочлена НОК знаменателей коэффициентов и НОД числителей
// Выполнил: Клюкин Александр, гр. 5302
// chislitel - числитель , noz - наименьший общий знаменатель.
// Модуль: P-7
MathLib.fac_p_pq = function (B) {
    var b = MathLib.getPolynomCoefficient(B, 0);
    var nok = b.q;
    var nod = b.p;
    
    for (var i = 1; i <= MathLib.deg_p_n(B); i++) { //функция степени многочлена
	var b = MathLib.getPolynomCoefficient(B, i);
        nok = MathLib.lcm_nn_n(nok, b.q);  // НОК знаменателей
        nod = MathLib.gcf_nn_n(nod, b.p);  // НОД числителей
    }
     for (var i = 0; i <= MathLib.deg_p_n(B); i++ ){
	 if (B[i] != null){
	     B[i].p = MathLib.div_zz_z (B[i].p, nod);
	     B[i].p = MathLib.mul_zz_z (B[i].p, MathLib.div_zz_z(nok, B[i].q));
	     B[i].q = MathLib.ONE;
	}
    }
    var res = {};
    res = {p: nod, q: nok};
    return res;
};

