MathLib.abs_z_n = function (n){
    n1 = MathLib.cloneNumber(n);
    n1.s = 1;
    return n1;
};
  
MathLib.add_zz_z = function (n1, n2){
    var a = MathLib.poz_z_d (n1);
    var b = MathLib.poz_z_d (n2);
    if (a!=1 && b!=1){
	return MathLib.add_nn_n(n1, n2);
    }else if (a!=1){
	if (MathLib.com_nn_d (n1, n2)!=1){
	    return MathLib.sub_nn_n(n1, MathLib.abs_z_n(n2));
	}else {
	    return MathLib.mul_zm_z(MathLib.sub_nn_n(MathLib.abs_z_n(n2), n1));
	}
    }else if (b!=1){
	if (MathLib.com_nn_d (n1, n2)!=1){
	    return MathLib.mul_zm_z(MathLib.sub_nn_n(MathLib.abs_z_n(n1), n2));
	}else {
	    return MathLib.sub_nn_n(n2, MathLib.abs_z_n(n1));
	}
	
    }else{
	return MathLib.mul_zm_z(MathLib.add_nn_n(MathLib.abs_z_n(n1), MathLib.abs_z_n(n2)));
    }
};
        

  	
