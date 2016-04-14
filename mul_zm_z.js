// Умножение целого на (-1).
// -- Боселов И.А., 5301.

MathLib.mul_zm_z = function(a)
{
	var a2 = MathLib.cloneNumber(a);
	a2.s = -a2.s;
	return MathLib.finalizeNumber(a2);
};