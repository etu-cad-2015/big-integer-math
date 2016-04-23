MathLib.div_qq_q = function (qqA, qqB)
{
	//Деление дробей
	//Автор Протасова Дарья гр 5301
	//Дроби имеют вид : A = a/b и B = c/d
	//Результируящая дробь G = e/f
	//Числитель полученной дроби e = a*d
	//Знаменатель полученной дроби f = b*c
    var A = {}; 
    var B = {};
    A = MathLib.cloneFraction(qqA);
    B = MathLib.cloneFraction(qqB);
	A.p = MathLib.mul_zz_z(A.p,B.q);
	A.q = MathLib.mul_zz_z(B.p,A.q);
	
    return MathLib.red_q_q(A);
};
