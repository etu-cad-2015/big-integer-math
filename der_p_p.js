//Кольцов С.О. 5301
//Производная многочлена
MathLib.der_p_p = function(polynom)
{
	polynom.shift(); //удаляем первый элемент, ибо его степень 0

	// последовательно проходим по каждому члену многочлена
	for (var i = 0; i < polynom.length; i++)
	{
		// умножаем числитель каждого многочлена на его степень i
		var coeff = polynom[i];
		if (coeff != null) {
			polynom[i] = MathLib.mul_qq_q(coeff, MathLib.trans_z_q(MathLib.jsNumberToNumber(i + 1)));
		}
	}

	return polynom;
}
