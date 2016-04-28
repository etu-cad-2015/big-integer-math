//Created by Konstantin Rakov (5302) on 12.04.2016
//Преобразование многочлена - кратные корни в простые
MathLib.nmw_p_p = function(polinom)
{
	//просто вспомогательные переменные
	var z, m, r;
	//результатирующий полином
	var p = [ MathLib.cloneFraction(MathLib.ONE_FRACTION) ];
	
	//пока степень исходно полинома не равна 0
	while(MathLib.deg_p_n(polinom) != 0)
	{
		//r - НОД исходного полинома и его производной
		r = MathLib.gcf_pp_p(polinom, MathLib.der_p_p(polinom));
		//z - частное исходного полинома и r
		z = MathLib.div_pp_p(polinom, r);
		//m - НОД z и производной
		m = MathLib.gcf_pp_p(z, MathLib.der_p_p(polinom));
		//при делении z на m получаем линейный множитель в 1ой степени
		//произведение таких множителей и есть исходный полином
		p = MathLib.mul_pp_p(p, MathLib.div_pp_p(z, m));
		polinom = r;
	}
	
	return MathLib.finalizePolynom(p);
};
