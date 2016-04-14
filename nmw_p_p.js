//Created by Konstantin Rakov (5302) on 12.04.2016
//Преобразование многочлена - кратные корни в простые
function nmw_p_p(polinom)
{
	//просто вспомогательные переменные
	var z, m, r;
	//результатирующий полином
	var p = [[{d: [1], s: 1}, {d: [1], s: 1}]];
	
	//пока степень исходно полинома не равна 0
	while(deg_p_n(polinom) != 0)
	{
		//r - НОД исходного полинома и его производной
		r = gcf_pp_p(polinom, der_p_p(polinom));
		//z - частное исходного полинома и r
		z = div_pp_p(polinom, r);
		//m - НОД z и производной
		m = gcf_pp_p(z, der_p_p(polinom));
		//при делении z на m получаем линейный множитель в 1ой степени
		//произведение таких множителей и есть исходный полином
		p = mul_pp_p(p, div_pp_p(z, m));
		polinom = r;
	}
	
	return p;
}