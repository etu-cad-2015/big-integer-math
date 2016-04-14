//Модуль: ADD_PP_P
//Сложение 2-х многочленов с рациональными коэффициентами
//Кашинцев А.А. , 5301
MathLib.add_pp_p = function (polinom1, polinom2) {

      //суммарный многочлен
      var polinomsum = [];
	  
	  //Нахождение длины наибольшего многочлена (кол-во итераций будущего цикла)
	  var maxlength = Math.max(polinom1.length, polinom2.length);
	  
	  for (var i = 0; i < maxlength; ++i) {
	        //Добавление нового элемента в массив коэффициентов полинома polinomsum 
	        polinomsum.push ([ { d: [], s: 1 }, { d: [] } ]); 
			//Вычисление i-ого коэффициента суммарного многочлена
			polinomsum[i] = MathLib.add_qq_q (polinom1[i], polinom2[i]);
	        }
			
	  return polinomsum;	
}


