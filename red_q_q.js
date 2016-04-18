// Сокращение дроби.
// -- Лобарев Андрей, 5302.
MathLib.red_q_q = function(q) {
	var n = gcf_nn_n(q.p, q.q); // находим НОД числителя и знаменателя
	return MathLib.finalizeFraction({
		p: div_zz_z(q.p, n), // делим на НОД числитель
		q: div_zz_z(q.q, n)  // делим на НОД знаменатель
	});
};
