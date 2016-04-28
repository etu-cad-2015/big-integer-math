 /*
	Ковригин Владимир Константинович
	Группа № 5302
	Модуль P-2 Вычитание многочленов
   */
   
   // принимает два многочлена
   MathLib.sub_pp_p = function (polinom1, polinom2) { 
     
   
      //Нахождение длины наибольшего многочлена (кол-во итераций будущего цикла)
      var maxlength = Math.max(polinom1.length, polinom2.length);
	  
	  for (var i = 0; i < maxlength; ++i) {

	      polinom1[i] = MathLib.sub_qq_q (MathLib.getPolynomCoefficient(polinom1, i), MathLib.getPolynomCoefficient(polinom2, i));
	        }		
      return MathLib.finalizePolynom(polinom1);
   
   };
