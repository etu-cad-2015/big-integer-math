// Умножение многочлена на x^k.
// -- Карлин Захар, 5302.
MathLib.mul_pxk_p = function(p, k) {
	for (var i = 0; i < k; i++) {
		p.unshift(undefined);
	}
	return MathLib.finalizePolynom(p);
}
