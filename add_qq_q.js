MathLib.add_qq_q = function (qqA, qqB)
{
	// Сложение дробей
	// Автор Духовой Владимир гр 5301
    var A = {}; 
    var B = {};
	A.p = MathLib.cloneNumber(qqA.p);
	B.p = MathLib.cloneNumber(qqB.p);
	A.q = MathLib.cloneNumber(qqA.q);
	B.q = MathLib.cloneNumber(qqB.q);
	// Входные дроби имеет вид : A = a/b и B = c/d
	// Результируящая дробь имеет вид e/f
	// Числитель полученной дроби e = a*НОК(b,d)+b*НОК(b,d)
	//A.p = MathLib.add_zz_z(MathLib.mul_zz_z(A.p,MathLib.lcm_nn_n(A.q,B.q)),MathLib.mul_zz_z(B.p,MathLib.lcm_nn_n(A.q,B.q)));
	// Знаменатель полученной дроби f = НОК(b,d)
    //	A.q = MathLib.lcm_nn_n(A.q,B.q);
    A.p = MathLib.add_zz_z (MathLib.mul_zz_z(A.p, B.q), MathLib.mul_zz_z(B.p, A.q));
    A.q = MathLib.mul_zz_z (A.q, B.q);
	
    return MathLib.red_q_q(A);
} 
