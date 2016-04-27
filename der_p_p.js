//Кольцов С.О. 5301
//Производная многочлена
MathLib.der_p_p = function(polynom)
{
	polynom.shift(); //удаляем первый элемент, ибо его степень 0

	// последовательно проходим по каждому члену многочлена
	polynom.forEach(function(element, index, array) {
		// умножаем числитель каждого многочлена на его степень i
		polynom[index] = MathLib.mul_qq_q(element, MathLib.trans_z_q(MathLib.jsNumberToNumber(index + 1)));
	});

	return MathLib.finalizePolynom(polynom);
}
