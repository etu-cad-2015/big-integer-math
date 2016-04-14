MathLib.add_qq_q = function (qqA, qqB)
{
	// Сложение дробей
	// Автор Духовой Владимир гр 5301
	var A = []; 
	var B = [];
	A[0] = MathLib.cloneNumber(qqA[0]);
	B[0] = MathLib.cloneNumber(qqB[0]);
	A[1] = MathLib.cloneNumber(qqA[1]);
	B[1] = MathLib.cloneNumber(qqB[1]);
	// Входные дроби имеет вид : A = a/b и B = c/d
	// Результируящая дробь имеет вид e/f
	// Числитель полученной дроби e = a*НОК(b,d)+b*НОК(b,d)
	A[0] = MathLib.add_zz_z(MathLib.mul_zz_z(A[0],MathLib.lcm_nn_n(A[1],B[1])),MathLib.mul_zz_z(B[0],MathLib.lcm_nn_n(A[1],B[1])));
	// Знаменатель полученной дроби f = НОК(b,d)
	A[1] = MathLib.lcm_nn_n(A[1],B[1]);
	
	return A;
} 
