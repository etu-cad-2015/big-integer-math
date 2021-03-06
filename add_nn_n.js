// Сложение натуральных чисел (абсолютных значений).
// -- Кузьмин Виталий, 5302 (модуль сделан как пример).
MathLib.add_nn_n = function(n1, n2) {
	var n3 = { d: [], s: 1 };

	var carry = 0; // В первый разряд ничего не переносим.

	// Складываем все разряды, которые есть в обоих числах.
	// JavaScript позволяет безопасно выходить за границы массива, поэтому если одно число короче другого, будем считать, что отсутствующие разряды 0.
	var l = Math.max(n1.d.length, n2.d.length);
	for (var i = 0; i < l; ++i) {
		var d1 = n1.d[i], d2 = n2.d[i];
		// Если такого разряда нет в каком-либо из чисел, заменяем его на 0.
		if (d1 == null) {
			d1 = 0;
		}
		if (d2 == null) {
			d2 = 0;
		}

		// Складываем цифры.
		var d = d1 + d2 + carry;
		if (d >= 10) { // Произошло переполнение разряда.
			d -= 10;
			carry = 1;
		} else {
			carry = 0;
		}

		n3.d.push(d);
	}

	// Если произошёл перенос из последнего разряда, добавить его.
	if (carry != 0) {
		n3.d.push(1);
	}

	return MathLib.finalizeNumber(n3);
}
