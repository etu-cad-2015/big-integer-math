//Created by Konstantin Rakov (5302) on 12.04.2016
//Преобразование многочлена - кратные корни в простые
MathLib.nmw_p_p = function(polinom)
{
	var z, r;
	
	r = MathLib.gcf_pp_p(Object.assign([], polinom), MathLib.der_p_p(Object.assign([], polinom)));
	z = MathLib.div_pp_p(Object.assign([], polinom), Object.assign([], r));
	z = MathLib.mul_pq_p(Object.assign([], z), MathLib.led_p_q(Object.assign([], r)));
	
	return MathLib.finalizePolynom(z);
};
