MathLib.div_nn_dk = function(A, B){
/*
Вычисление первой цифры деления большего натурального на меньшее 
(алгоритм деления в столбик A/B)
//Пешков Максим, гр. 5301	
*/	
	var A1 = [], B1 = [];
	var n = A.length, m = B.length;
	
	//1. Выбираем из A слева столько цифр, сколько их в B. Получаем число A1
	for (var i = 0; i < m; i++) { 
		A1[i] = A[n-m+i];
	}
	
	//2. Если А1 меньше чем B, то прибавляем в него еще одну цифру из А.
	if (MathLib.com_nn_d(A1, B) == 1) {
		for (var i = m; i > 0; i--)
			A1[i] = A1[i-1];	
		A1[0] = A[0];	
	}

	//3. Перебором всех цифр c находим самую большую, при которой произведение c*B <= A1
	for (var c = 9; c > 0; c--) {
		B1 = MathLib.mul_nd_n(B, c);	
		var dif = MathLib.com_nn_d(B1, A1);
		if (dif == 1 || dif == 0)
			break;
	}
	//Записываем цифру c в результат
	var res = c;
	return MathLib.finalizeNumber(res);
}
