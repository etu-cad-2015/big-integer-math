//Охота А.Г. гр. 5301
//Модуль: Z-10 - MOD_ZZ_Z
//Остаток от деления большего целого числа на меньшее или равное натуральное с остатком (делитель отличен от нуля)

MathLib.mod_zz_z = function(zA, zB)
{
	var A = {};
	var B = {};
	
	A = MathLib.cloneNumber(zA);
	B = MathLib.cloneNumber(zB);
	
	if (A.s != B.s)     //Сравниваем их знаки
		{
		return (B.d + MathLib.mul_z-_z(MathLib.sub_zz_z(A, MathLib.mul_zz_z(B, MathLib.div_zz_z(A, B)))); 	//Если не одинаковые,
		                                                                            			//то возвращает значение умноженное на (-1)
		}
	else return MathLib.sub_zz_z(A, MathLib.mul_zz_z(B, MathLib.div_zz_z(A, B)));   	//Иначе, возвращает разность между A.d и B.d,
		                                                                  		//умноженным на целое частное между A.d и B.d
}
