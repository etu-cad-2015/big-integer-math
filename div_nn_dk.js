MathLib.div_nn_dk = function(A, B){
/*
Вычисление первой цифры деления большего натурального на меньшее 
(алгоритм деления в столбик A/B)
//Пешков Максим, гр. 5301	
*/	
	var A1 = [], B1 = [];
	var n = A.d.length, m = B.d.length;
	
	//1. Выбираем из A слева столько цифр, сколько их в B. Получаем число A1
	for (var i = 0; i < m; i++) { 
		A1[i] = A.d[n-m+i];
	}
	//2. Если А1 меньше чем B, то прибавляем в него еще одну цифру из А.
  var A1num = {};
  A1num.d = A1;
  A1num.s = 1;
	if (MathLib.com_nn_d(A1num, B) == 1) {
		for (var i = m; i > 0; i--)
			A1[i] = A1[i-1];	
		A1[0] = A.d[n-m-1];//!!!!	
	}
	//3. Перебором всех цифр c находим самую большую, при которой произведение c*B <= A1
	for (var c = 9; c > 0; c--) {
		B1 = MathLib.mul_nd_n(B, c);	

    A1num.d = A1;
    A1num.s = 1;
		var dif = MathLib.com_nn_d(B1, A1num);
		if (dif == 1 || dif == 0)
			break;
	}
	//Записываем цифру c в результат
	var res = c;
	return res;
}
