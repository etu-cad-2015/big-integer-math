// Преобразование целого числа в дробное.
// -- Козлов Денис, группа 5302.

MathLib.trans_z_q = function(p) {
	return MathLib.finalizeFraction({
		p: MathLib.cloneNumber(p),
		q: { d: [1], s: 1 }
	});
};
