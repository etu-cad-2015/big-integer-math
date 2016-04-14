//Охота А.Г. гр. 5301
//Модуль: Z-9 - MOD_ZZ_Z
//Остаток от деления большего целого числа на меньшее или равное натуральное с остатком (делитель отличен от нуля)

MathLib.mod_zz_z = function(zA, zB)
{
	var A = {};
	var B = {};
	
	A = MathLib.cloneNumber(zA);
	B = MathLib.cloneNumber(zB);
	
	if (B.d != 0)     //Если делитель не равен нулю
	{
	  if (A.s != B.s)     //Сравниваем их знаки
	    {
		    return MathLib.mul_z-_z(MathLib.sub_zz_z(A.d, MathLib.mul_zz_z(B.d, MathLib.div_zz_z(A.d, B.d)))); 	//Если не одинаковые,
		                                                                            				//то возвращает значение умноженное на (-1)
		  }
		else return MathLib.sub_zz_z(A.d, MathLib.mul_zz_z(B.d, MathLib.div_zz_z(A.d, B.d)));   //Иначе, возвращает разность между A.d и B.d,
		                                                                  			//умноженным на целое частное между A.d и B.d
	}
	else return 0; 		//Вернуть 0, если делитель равен 0
}
