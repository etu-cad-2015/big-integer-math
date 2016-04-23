MathLib.mul_qq_q = function (n1, n2){
    var n1_clone = MathLib.cloneFraction (n1);
    n1_clone.p = MathLib.mul_zz_z(n1_clone.p, n2.p);
    n1_clone.q = MathLib.mul_zz_z(n1_clone.q, n2.q);
    return MathLib.red_q_q (n1_clone);
};
