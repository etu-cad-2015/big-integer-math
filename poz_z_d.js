/*
	Модуль Z - 2 : Определение положительности целого числа.
	-- Автор : Карлин Захар , 5302.
*/
	function poz_z_d (b , n , a)
	{
		if (a[n] == 0) return 0; // Проверка числа на 0 . Если старшая позиция числа = 0 , значит все число равно нулю.
		(b == 0) ? return 2 : return 1; // Возврат с помощью тернарного оператора . Если знак + , то возвращает 2 , иначе 1.
	}