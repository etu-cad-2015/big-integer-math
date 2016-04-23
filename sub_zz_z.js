MathLib.sub_zz_z = function (n1, n2){
    return MathLib.add_zz_z (n1, MathLib.mul_zm_z(n2));
};
