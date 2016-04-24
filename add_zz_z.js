// Сложение целых чисел.
// -- Мазур Антон, 5302.
MathLib.add_zz_z = function (n1, n2) {
	// signs of each term
	var a = MathLib.poz_z_d(n1);
	var b = MathLib.poz_z_d(n2);
	if (a != 1 && b != 1) {
		// both numbers are not negative
		return MathLib.add_nn_n(n1, n2);
	}
	else {
		// the first number is positive or zero, the second is negative
		if (a != 1) {
			if (MathLib.com_nn_d(n1, n2) != 1) {
				return MathLib.sub_nn_n(n1, n2);
			} else {
				return MathLib.mul_zm_z(MathLib.sub_nn_n(n2, n1));
			}
		} else {
			// the second number is positive or zero, the first is negative
			if (b!=1) {
				if (MathLib.com_nn_d(n1, n2) != 1) {
					return MathLib.mul_zm_z(MathLib.sub_nn_n(n1, n2));
				} else {
					return MathLib.sub_nn_n(n2, n1);
				}
			} else {
				// two numbers are negative
				return MathLib.mul_zm_z(MathLib.add_nn_n(n1, n2));
			}
		}
	}
};