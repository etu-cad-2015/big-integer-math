// Степень многочлена.
// -- Бердникова Евгения, 5301.

MathLib.deg_p_n = function(polynom)
{
	// Индексы в массиве совпадают с коэффициентами.
	return Math.max(polynom.length - 1, 0);
};
