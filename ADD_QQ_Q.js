ADD_QQ_Q = function (qqA, qqB)
{
	// Сложение дробей
	// Автор Духовой Владимир гр 5301
	
	// Входные дроби имеет вид : qqA = a/b и qqB = c/d
	// Результируящая дробь имеет вид e/f
	// Числитель полученной дроби e = a*НОК(b,d)+b*НОК(b,d)
	qqA[0] = ADD_ZZ_Z(MUL_ZZ_Z(qqA[0],LCM_NN_N(qqA[1],qqB[1])),MUL_ZZ_Z(qqB[0],LCM_NN_N(qqA[1],qqB[1])));
	// Знаменатель полученной дроби f = НОК(b,d)
	qqA[1] = LCM_NN_N(qqA[1],qqB[1]);
	
	return qqA;
} 