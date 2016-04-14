MathLib.SUB_NN_N = function(A, B) {
//Вычитание из первого большего натурального числа второго меньшего или равного
//Пешков Денис, гр. 5301	
	
	function  dif(max, min) {
		
		var n = max.length, m = min.length,  res = [];
		
		//если меньшее число короче большего, дописываем 0		
		if (m < n) {
			for (var i = m; i < n; i++)
				min[i] = 0;
		}	
		// проход по всем разрядам меньшего числа, начиная с последнего
		for (var i = 0, b = 0, c = 0; i < n; i++) { 	
			b = (max[i] - (min[i]) + c);
			if (b < 0) // если полученная разность разрядов < 0
			{
				max[i + 1]--; // в следующуем разряде бOльшего числа занимаем 1.
				b += 10; 
			} 
			res[i] = b % 10; // делением по модулю получаем текущий разряд рез-та
			c = b / 10 |0;
		}

		// удаляем ведущие нули
		i=0;
		while (res[i] == 0) i++;
		
		res.splice(0,i);
		return res
	};
	
	var C = { d: [], s: 1 };
	// сравниваем числа
	switch (MathLib.COM_NN_D(A, B)) {
	case 2:	
		//A > B
		C.d = dif(A.d, B.d);
		break;
	case 1:
		//A < B	
		C.d = dif(B.d, A.d);
		break;
	case 0:
		//A = B	
		C.d = [];
		break;
	};
	return returnMathLib.finalizeNumber(C);
	
}
