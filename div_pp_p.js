MathLib.div_pp_p = function (a, b)
{
  //Перевод псевдокода Позднякова со стр. 74
  //Частное от деления многочлена a на многочлен b при делении с остатком (результат сохраняется в a)
    //Угаров Антон, гр. 5301
    b = [];
    a = [];
    b[1] = MathLib.cloneFraction(MathLib.ONE_FRACTION);
    b[0] = MathLib.cloneFraction(MathLib.ZERO_FRACTION);
    a[0] = MathLib.cloneFraction(MathLib.ZERO_FRACTION);
    a[2] = MathLib.cloneFraction(MathLib.ONE_FRACTION);
    a[1] = MathLib.cloneFraction(MathLib.ONE_FRACTION);
    if (b.length == 1 && b[0] != null){
	a = mul_pq_p (a, b[0]);
	return a;
    }else if (b.length == 0){
	return a;
    }
    
  //т.к. в core.js указано, что многочлены изменяемы, предполагаю, что функции add_pp_p(a, b), mul_pxk_p(a, b), sub_pp_p(a, b) сохраняют результат в a
  var r = a, //a = bq + r (a - делимое, b - делитель, q - частное, r - остаток)
	q = [], //q = 0
      t = [];  //t - временная переменная, в нее при каждой итерации цикла записывается такой многочлен t = l(r)/l(b)*x^(deg(a)-deg(b)). Он будет являтся коэффицентом при степени deg(a)-deg(b) в частном q
    //q[0] = MathLib.cloneFraction(MathLib.ZERO_FRACTION);
    while (MathLib.deg_p_n(r) >= MathLib.deg_p_n(b)) { //пока r/q - неправильная дробь
	console.log (MathLib.deg_p_n(r));
	console.log (MathLib.deg_p_n(b));
    t[0] = MathLib.finalizeFraction(MathLib.div_qq_q(MathLib.led_p_q(r), MathLib.led_p_q(b))); //t = l(r)/l(b) (t - многочлен, где нулевой элемент - частное от деления наивысших степеней текущего остатка r и многочлена b)
    t= MathLib.mul_pxk_p(t, MathLib.deg_p_n(r) - MathLib.deg_p_n(b));  //t = t * x^(deg(a)-deg(b)) (умножаю t на x в степени, равной разности между степенями многочленов, для того, чтобы при умножении t на b получить степень многочлена r и наивысшие степени у r и b*t при вычитании сократились)
    q=MathLib.add_pp_p(q, t); //q = q+t (сохраняю соответсвующий коэффицент в частное q)
    t=MathLib.mul_pp_p(t, b) // t = t*b (сохраняю в t промежуточный результат для последующего вычитания из r)
	r=MathLib.finalizePolynom(MathLib.sub_pp_p(r, t)); //r = r - t (при вычитании наивысшая степень r уменьшается, т.к. l(r) == l(t) и deg(r) = deg(l))
  }
    a = MathLib.finalizePolynom(q); //записываю результат деления в a
    console.log(q);
    return a;
};
