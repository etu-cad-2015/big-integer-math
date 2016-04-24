// Старший коэффицент многочлена.
// -- Ковригин Владимир, 5302.
MathLib.led_p_q = function(p) {
	return MathLib.getPolynomCoefficient(p, MathLib.deg_p_n(p));
};	
