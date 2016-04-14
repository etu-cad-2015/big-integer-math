//Байдина М.П. гр.5301
//Модуль: Q-6 - SUB_QQ_Q
//Вычитание дробей

MathLib.sub_qq_q = function (qqA, qqB)

{
	var A=[];
	var B=[];
	
	A[0] = cloneNumber(qqA[0]);
	B[0] = cloneNumber(qqB[0]);
	A[1] = cloneNumber(qqA[1]);
	B[1] = cloneNumber(qqB[1]);
	
	// Входные дроби имеют вид : A = a/с и B = b/d
	// Результируящая дробь имеет вид e/f
	// Числитель полученной дроби e = a*( нок/c ) - b*( нок/d )
	
	A[0] = sub_zz_z( mul_zz_z(A[0], div_zz_z( lcm_nn_n(A[1] , B[1]), A[1])) , mul_zz_z(B[0], div_zz_z( lcm_nn_n(A[1] , B[1]), B[1])));
	
	A[1] = lcm_nn_n(A[1],B[1]);  // Знаменатель результирующей дроби : f = НОК( c,d )
	
	return A;
	
}
