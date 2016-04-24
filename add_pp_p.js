//Модуль: ADD_PP_P
//Сложение 2-х многочленов с рациональными коэффициентами
//Кашинцев А.А. , 5301
MathLib.add_pp_p = function (polinom1, polinom2) {

	  
      //Нахождение длины наибольшего многочлена (кол-во итераций будущего цикла)
      var maxlength = Math.max(polinom1.length, polinom2.length);
	  
	  for (var i = 0; i < maxlength; ++i) {

	      polinom1[i] = MathLib.add_qq_q (MathLib.getPolynomCoefficient(polinom1, i), MathLib.getPolynomCoefficient(polinom2, i));
	        }		
      return polinom1;	
	  };
