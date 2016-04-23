//Байдина М.П. гр.5301
//Модуль: Q-6 - SUB_QQ_Q
//Вычитание дробей

MathLib.sub_qq_q = function (qqA, qqB)

{
    var A={};
    var B={};
	
	A.p =  MathLib.cloneNumber(qqA.p);
	B.p =  MathLib.cloneNumber(qqB.p);
	A.q =  MathLib.cloneNumber(qqA.q);
	B.q =  MathLib.cloneNumber(qqB.q);
	
	// Входные дроби имеют вид : A = a/с и B = b/d
	// Результируящая дробь имеет вид e/f
	// Числитель полученной дроби e = a*( нок/c ) - b*( нок/d )
	
	A.p =  MathLib.sub_zz_z(MathLib.mul_zz_z(A.p, B.q),  MathLib.mul_zz_z(B.p, A.q));
	
    A.q = MathLib.mul_zz_z(A.q, B.q); 
	
    return  MathLib.red_q_q(A);
	
}
