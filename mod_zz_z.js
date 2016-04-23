//Охота А.Г. гр. 5301
//Модуль: Z-10 - MOD_ZZ_Z
//Остаток от деления большего целого числа на меньшее или равное натуральное с остатком (делитель отличен от нуля)

MathLib.mod_zz_z = function (A, B){
	var a = MathLib.poz_z_d(A);
	var b = MathLib.poz_z_d(B);
	if (a != b)     //Сравниваем их знаки
		{
		return MathLib.mul_zm_z(MathLib.abs_z_n(MathLib.mod_nn_n(A, B))); 	//Если не одинаковые,

		                                                                            			//то возвращает значение умноженное на (-1)
		}
	else return MathLib.abs_z_n(MathLib.mod_nn_n(A, B));   	//Иначе, возвращает разность между A.d и B.d,
		                                                                  		//умноженным на целое частное между A.d и B.d
};
