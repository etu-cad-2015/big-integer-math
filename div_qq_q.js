MathLib.div_qq_q = function (qqA, qqB)
{
	//Деление дробей
	//Автор Протасова Дарья гр 5301
	//Дроби имеют вид : A = a/b и B = c/d
	//Результируящая дробь G = e/f
	//Числитель полученной дроби e = a*d
	//Знаменатель полученной дроби f = b*c
	var A = []; 
	var B = [];
	A[0] = MathLib.cloneNumber(qqA[0]);
	B[0] = MathLib.cloneNumber(qqB[0]);
	A[1] = MathLib.cloneNumber(qqA[1]);
	B[1] = MathLib.cloneNumber(qqB[1]);
	A[0] = MathLib.mul_zz_z(A[0],B[1]);
	A[1] = MathLib.mul_zz_z(B[0],A[1]);
	
	return A;
}
