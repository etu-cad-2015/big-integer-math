// Объект, в котором будут располагаться все модули.
var MathLib = {};

// Заметки по архитектуре:
// - Натуральные, целые и рациональные числа ИММУТАБЕЛЬНЫ - функции, которые работают с ними, должны НИЧЕГО НЕ МЕНЯТЬ в передаваемым им числах и ВОЗВРАЩАТЬ НОВЫЕ ЧИСЛА.
// -- Модули должны использовать MathLib.cloneNumber, чтобы изменять поля существующих чисел.
// - Многочлены, передаваемые в функции, наоборот - МОДИФИЦИРУЕМЫ. Функции для работы с ними в большинстве случаев не должны возвращать ничего.

// Создаёт копию числа, чтобы не портить передаваемые в функции числа.
MathLib.cloneNumber = function(n) {
	return {
		d: n.d.slice(),
		s: n.s
	};
};

// Создаёт копию рационального числа.
MathLib.cloneFraction = function(f) {
	return {
		p: MathLib.cloneNumber(f.p),
		q: MathLib.cloneNumber(f.q)
	}
};

// Константы.
// Используйте функции клонирования, если возможно, что вы будете что-то в них изменять.
MathLib.ZERO = { d: [], s: 1 };
MathLib.ONE = { d: [1], s: 1 };
MathLib.ZERO_FRACTION = { p: MathLib.cloneNumber(MathLib.ZERO), q: MathLib.cloneNumber(MathLib.ONE) };
MathLib.ONE_FRACTION = { p: MathLib.cloneNumber(MathLib.ONE), q: MathLib.cloneNumber(MathLib.ONE) };

// Возвращает определённый коэффициент многочлена, даже если его нет.
// Нельзя напрямую изменять это число.
MathLib.getPolynomCoefficient = function(p, n) {
	var c = p[n];
	if (c == null) {
		return MathLib.ZERO_FRACTION;
	}
	return c;
};

// Функция, которая следит за тем, чтобы внутреннее представление числа всегда оставалось корректным.
// Каждый модуль, работающий непосредственно с цифрами, ОБЯЗАН вызвать эту функцию перед возвратом числа.
// -- Кузьмин Виталий, 5302.
MathLib.finalizeNumber = function(n) {
	// Отрезание лишних нулей в наивысших разрядах (например, если пользователь ввёл 001, сделать это 1).
	for (var i = n.d.length; i-- > 0; ) {
		if (n.d[i] != 0) { // Если цифра в данном разряде не 0, то останавливаем цикл.
			break;
		}
		n.d.pop(); // Убираем наивысший разряд, если он 0.
	}

	// Ноль всегда должен быть положительным.
	if (n.d.length == 0) {
		n.s = 1;
	}

	return n; // Чтобы можно было писать return в вызывающих функциях в одну строчку.
};

// Функция, которая приводит дробь к нормальному виду.
// Модули, работающие непосредственно с числителем или со знаменателем, должны вызывать её при возврате новых чисел.
// -- Кузьмин Виталий, 5302.
MathLib.finalizeFraction = function(f) {
	// Приводим к нормальному виду и числитель, и знаменатель.
	MathLib.finalizeNumber(f.p);
	MathLib.finalizeNumber(f.q);

	// Знаменатель не должен быть 0.
	if (f.q.d.length == 0) {
		f.q = MathLib.cloneNumber(MathLib.ONE);
	}

	// Знак должен быть только у числителя.
	f.p.s *= f.q.s;
	f.q.s = 1;

	return f; // Чтобы можно было писать return в вызывающих функциях в одну строчку.
};

// Функция, приводящая многочлены к нормальному виду.
// -- Кузьмин Виталий, 5302.
MathLib.finalizePolynom = function(p) {
	// Убираем наивысшие члены, коэффициенты которых равны 0, чтобы длина массива отражала наивысший коэффициент.
	p.forEach(function(element, index, array) {
		if (element == null || element.p.d.length == 0) {
			delete p[index];
		}
	});

	return p; // Чтобы можно было писать return в вызывающих функциях в одну строчку.
};

// Перевод строкового представления (числа, введённого пользователем) в число.
// -- Кузьмин Виталий, 5302.
MathLib.parseNumber = function(str) {
	// Создание объекта числа, изначально +0.
	var n = { d: [], s: 1 };

	// Добавление чисел от наименьшего разряда к наибольшему.
	for (var i = str.length; i-- > 0; ) {
		var code = str.charCodeAt(i);
		if (code >= 48 && code <= 57) { // От 0 до 9.
			n.d.push(code - 48);
		} else if (code == 45) { // Знак "минус".
			n.s = -1;
		}
	}

	return MathLib.finalizeNumber(n);
};

// Перевод строкового представления дробного числа во внутреннее.
// -- Кузьмин Виталий, 5302.
MathLib.parseFraction = function(str) {
	var parts = str.split("/"); // До / - числитель, после - знаменатель.
	return MathLib.finalizeFraction({
		p: (parts[0] != null ? MathLib.parseNumber(parts[0]) : { d: [], s: 1 }),
		q: (parts[1] != null ? MathLib.parseNumber(parts[1]) : { d: [1], s: 1 }),
	});
};

// Внутренняя функция для считывания степени многочлена.
// Как parseInt для основания 10, но считывает только положительные числа и не делает проверок.
MathLib.parseNomDegree = function(str) {
	var d = 0;
	for (var i = 0; i < str.length; ++i) {
		var code = str.charCodeAt(i);
		if (code >= 48 && code <= 57) { // От 0 до 9.
			d = d * 10 + (code - 48);
		}
	}
	return d;
};

// Перевод строкового представления многочлена во внутреннее.
// -- Кузьмин Виталий, 5302.
MathLib.parsePolynom = function(str) {
	var p = [];

	var re = /^([\+-]?[^\+-]*)(.*)$/;
	var noms;

	while (str != null && str.length != 0) {
		noms = re.exec(str); // Берём текущий член и всё, что после него.
		str = noms[2]; // На следующем шаге продолжаем для следующего члена.
		var nom = noms[1].split("x"); // Берём первый на данный момент член и разбиваем его на коэффициент и степень.

		// Степень.
		var deg = 0;
		if (nom[1] != null) {
			deg = Math.max(MathLib.parseNomDegree(nom[1]), 1);
		}

		// Коэффициент.
		if (nom[0] == null) {
			continue;
		}
	    var coeff = MathLib.parseFraction(nom[0]);
		if (coeff.p.d.length == 0) {
			if (deg != 0) {
			    coeff = MathLib.cloneFraction(MathLib.ONE_FRACTION);
				if(nom[0].charCodeAt(0) == 45) { //Если стоит минус перед х
					coeff.p.s = -1;
				}
			} else {
				continue;
			}
		}

		p[deg] = coeff;
	}

	return MathLib.finalizePolynom(p);
};

// Перевод числа в строковое представление, пригодное для показа пользователю.
// -- Кузьмин Виталий, 5302.
MathLib.numberToString = function(n) {
	// Если число 0, сразу вернём "0", иначе будет пустая строка.
	if (n.d.length == 0) {
		return "0";
	}

	// Поскольку строки в JavaScript иммутабельны, использовать += неэффективно, вместо этого будем использовать массив символов.
	var str = [];

	// Если число отрицательное, добавляем в начале минус.
	if (n.s < 0) {
		str.push("-");
	}

	// Добавление символов цифр в массив.
	for (var i = n.d.length; i-- > 0; ) {
		str.push(String.fromCharCode(48 + n.d[i]));
	}

	return str.join("");
};

// Перевод дроби в строковое представление.
// -- Кузьмин Виталий, 5302.
MathLib.fractionToString = function(f) {
	if (f.q.d.length == 1 && f.q.d[0] == 1) {
		// Знаменатель 1, выводим как целое.
		return MathLib.numberToString(f.p);
	}

	return MathLib.numberToString(f.p) + "/" + MathLib.numberToString(f.q);
};

// Перевод многочлена в строковое представление.
// -- Кузьмин Виталий, 5302.
MathLib.polynomToString = function(p) {
    var str = [];
    
     // если многочлен пустой, то сразу выводим ноль
    if (p.length == 0){
		return "0";
    }
    
	p.forEach(function(nom, deg, array) {
		var tstr = [];

		if ((deg + 1 != p.length) && nom.p.s > 0) { // Добавляем +, если надо, но не перед наивысшей степенью.
			tstr.push("+");
		}

		if (deg == 0 || !(nom.p.d.length == 1 && nom.p.d[0] == 1 && nom.q.d.length == 1 && nom.q.d[0] == 1)) { //Коэффициент 1 не выводить, НО свободный член выводить всегда.
			tstr.push(MathLib.fractionToString(nom));
		}

		if (deg > 0) {
			tstr.push("x");
			if (deg > 1) {
				tstr.push("<sup>" + deg +"</sup>");
			}
		}

		str.push(tstr.join(""));
	});

	return str.reverse().join("");
};

// Перевод обычного числа (степени многочлена) в длинное.
// -- Кузьмин Виталий, 5302.
MathLib.jsNumberToNumber = function(n) {
	var r = { d: [], s: 1 };
	if (n < 0) {
		// Число отрицательное.
		r.s = -1;
		n = -n; // Округляется к 0 (как при переводе float в int).
	}

	n = Math.floor(n);
	while (n != 0) {
		r.d.push(n % 10);
		n = Math.floor(n / 10);
	}

	return MathLib.finalizeNumber(r);
};
