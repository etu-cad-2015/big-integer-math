// Преобразование дробного числа в целое.
// Фрид Денис, 5302.
MathLib.trans_q_z = function(q) {
    if (MathLib.com_nn_d(q.q, MathLib.ONE) == 0)
	return MathLib.cloneNumber(q.p);
    else
	return 0;
};
