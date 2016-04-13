// Преобразование целого числа в натуральное.
// -- Фрид Денис, 5302.
MathLib.trans_z_n = function(n) {
	return MathLib.finalizeNumber({ d: n.d.slice(), s: 1 });
}
