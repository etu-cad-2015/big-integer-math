// Преобразование целого числа в натуральное.
// -- Фрид Денис, 5302.
MathLib.trans_z_n = function(n) {
	var n2 = MathLib.cloneNumber(n);
	n2.s = 1;
	return MathLib.finalizeNumber(n2);
};

MathLib.abs_z_n = MathLib.trans_z_n;