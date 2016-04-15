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

	// Знак должен быть только у числителя.
	f.p.s *= f.q.s;
	f.q.s = 1;

	return f; // Чтобы можно было писать return в вызывающих функциях в одну строчку.
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
		} else if (i == 0 && code == 45) { // Знак "минус" в первом символе.
			n.s = -1;
		}
	}

	return MathLib.finalizeNumber(n);
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

// Константы.
// Используйте функции клонирования, если возможно, что вы будете что-то в них изменять.
MathLib.ZERO = { d: [], s: 1 };
MathLib.ONE = { d: [1], s: 1 };
MathLib.ZERO_FRACTION = { p: MathLib.cloneNumber(MathLib.ZERO), q: MathLib.cloneNumber(MathLib.ONE) };
MathLib.ONE_FRACTION = { p: MathLib.cloneNumber(MathLib.ONE), q: MathLib.cloneNumber(MathLib.ONE) };
