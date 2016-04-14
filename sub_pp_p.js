 /*
	Ковригин Владимир Константинович
	Группа № 5302
	Модуль P-2 Вычитание многочленов
   */
   
   // принимает два многочлена
   Mathlib.sub_pp_p = function (polynom_1, polynom_2) { 
     
     var deg_1 = polynom_1.lenght - 1; // степень первого многочлена
     var deg_2 = polynom_2.lenght - 1; // степень второго многочлена
   
     var polynom_resault []; // результирующий многочлен
	 
	 if (deg_1 < deg_2) {
	   
	   for (var i = 0; i < deg_1; i++) {
	     
		 polynom_resault[i][0].d =  Mathlib.sub_qq_q(polynom_1[i][0].d, polynom_2[i][0].d);
		 
	   }
	   for (var j = deg_1; j < deg_2 + 1; j++) {
	     
		 polynom_resault[i][0].d = polynom_2[i][0].d;
		 
	   }
	   
	   return polynom_resault;  
	   
	 }
	 
	 if (deg_1 = deg_2) {
	   
	   for (var i = 0; i < deg_1 + 1; i++) {
	     
		 polynom_resault[i][0].d =  Mathlib.sub_qq_q(polynom_1[i][0].d, polynom_2[i][0].d);
		 
	   }
	 
	   return polynom_resault;
	   
	 }
     
	 if (deg_1 > deg_2) {
	   
	     for (var i = 0; i < deg_2; i++) {
	     
		 polynom_resault[i][0].d =  Mathlib.sub_qq_q(polynom_1[i][0].d, polynom_2[i][0].d);
		 
	   }
	   for (var j = deg_2; j < deg_1 + 1; j++) {
	     
		 polynom_resault[i][0].d = polynom_2[i][0].d;
		 
	   }
	   
	   return polynom_resault;  
	   
	 }
   
   
   }