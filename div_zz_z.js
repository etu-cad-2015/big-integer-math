MathLib.div_zz_z = function (n1, n2){
    var a = MathLib.poz_z_d(n1);
    var b = MathLib.poz_z_d(n2);
    var zero = {d: [], s: 1};
    if (a == 0){	
	return MathLib.finalizeNumber (zero);
    }else if (b == 0){
	return MathLib.finalizeNumber (zero);
    }
    
    if (a == b){
	return MathLib.abs_z_n (MathLib.div_nn_n(n1, n2));
    }else{
	return MathLib.mul_zm_z (MathLib.abs_z_n(MathLib.div_nn_n(n1, n2)));
    }    
};
