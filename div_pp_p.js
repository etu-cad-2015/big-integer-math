function DIV_PP_P(A, B)
{
	//Перевод псевдокода Позднякова со стр. 74 на JS
	//Частное от деления многочлена на многочлен при делении с остатком
	//Угаров Антон, гр. 5301
	if(DEG_P_N(A) >= DEG_P_N(B)) //Входим в цикл только если степень a>=b 
	{
		var R = A, Q = [], T = []; //A = BQ + R (A - делимое, B - делитель, Q - частное, R - остаток)
		while(DEG_P_N(R) >= DEG_P_N(B))
		{
			T = MUL_Pxk_P([DIV_QQ_Q(LED_P_Z(R), LED_P_Z(B))], DEG_P_N(R) - DEG_P_N(B)); //T = l(R)/l(B) * x^(deg(A)-deg(B))
			Q = ADD_PP_P(Q, T); //Q = Q+T
			R = SUB_PP_P(R, MUL_PP_P(T, B)); //R = R - TB
		}
		return Q; 
	}
	else
		return [TRAN_Z_Q(TRAN_N_Z({d:[0],s:1}))]; //Возврат 0
}