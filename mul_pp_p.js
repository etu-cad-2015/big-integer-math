function MUL_PP_P(firstPol, secondPol)
{
	var i, len, result;
	len = firstPol.length+secondPol.length; //Ограничение цикла обнуления (узнаём макс. степень)
	for (i=0; i<len; i++)					//Обнуляем все коэффициенты
	{
		result[i].[0].d=0;					//Числитель=0
		result[i].[1].d=1;					//Знаменатель=1
		result[i].[0].s=1;					//Знак числителя: +
	}
	//Начинаем вычислять результат
	if (firstPol.length>=secondPol.length)	//Если степень первого больше или равна
		for (i=0; i<secondPol.lenght; i++)
		{
			result=ADD_PP_P( MUL_P_Q(MUL_Pxk_P(firstPol,i),secondPol[i]));
		}
	else									//Если степень второго больше
		for (i=0; i<firstPol.length; i++)	
		{
			result=ADD_PP_P( MUL_P_Q(MUL_Pxk_P(secondPol,i),firstPol[i]));
		}
	return result;
}
//Вычисление:
//ADD_PP_P - добавляем к существующим коэффициентом коэффициенты нового многочлена
//MUL_P_Q - умножаем все коэффициенты  первого многочлена на коэффициент второго
//стоящего при x^i
//MUL_Pxk_P предварительно домножаем на x^i
//
//На примере (x^2-1)*(x+1)
//Степень первого больше.
//firstPol= -1*x^0 + 0*x^1 + 1*x^2
//secondPol= 1*x^0 + 1*x^1
//result= 0*x^0 + 0*x^1 + 0*x^2 + 0*x^3
//Цикл пойдёт два раза
//1 ПРОХОД------------------------------------------------------------------------------
//MUL_Pxk_P(firstPol,0) = -1*x^0 + 0*x^1 + 1*x^2
//MUL_P_Q(MUL_Pxk_P(firstPol,0),secondPol[0]) = -1*x^0 + 0*x^1 + 1*x^2
//ADD_PP_P( MUL_P_Q(MUL_Pxk_P(secondPol,0),firstPol[0])) = -1*x^0 + 0*x^1 + 1*x^2
//2 ПРОХОД------------------------------------------------------------------------------
//MUL_Pxk_P(firstPol,1) = -1*x^1 + 0*x^2 + 1*x^3
//MUL_P_Q(MUL_Pxk_P(firstPol,1),secondPol[1]) = -1*x^1 + 0*x^2 + 1*x^3
//ADD_PP_P( MUL_P_Q(MUL_Pxk_P(secondPol,1),firstPol[1])) = -1*x^0 + -1*x^1 + 1*x^2 + 1*x^3
//
//Возвращаем результат