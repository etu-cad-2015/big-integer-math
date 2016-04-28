MathLib.mul_pq_p = function (p, k){
    var n = p.length;
    for (var i = 0; i<n; i++){
	if (p[i] != null){
	    p[i] = MathLib.mul_qq_q (p[i], k);
	}
    }
	return MathLib.finalizePolynom(p);
};
