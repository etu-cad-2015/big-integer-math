MathLib.mul_pp_p = function (firstPol, secondPol)
{
	var i, len, result = [];
    len = MathLib.deg_p_n(firstPol) + MathLib.deg_p_n(secondPol);
    result = [];
    for (i=0; i<=len; i++)					//Обнуляем все коэффициенты
    {
	 result[i] = MathLib.cloneFraction (MathLib.ZERO_FRACTION);
    }

    for (var i=0; i<=len; i++){
	for (var j=0; j<=i; j++){
	    b = i-j;
	    result[i] = MathLib.add_qq_q(MathLib.getPolynomCoefficient(result, i), MathLib.mul_qq_q(MathLib.getPolynomCoefficient(firstPol, j), MathLib.getPolynomCoefficient(secondPol, b)));
	}
    }

    return MathLib.finalizePolynom(result);
};
    
