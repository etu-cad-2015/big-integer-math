//Кольцов С.О. 5301
 //Производная многочлена
 
 function DER_P_P(polynom)
 {
 	var carry = 0;//перенос разряда
 	//последовательно проходим по каждому числителю многочлена
 	for(i=0 ; i<polynom.length ; i++)
	{
 		//умножаем числитель каждого многочлена на его степень i
 		for(j = 0 ; j < polynom.d.length ; j++)
 		{
 			polynom[i][0].d[j] = (polynom[i][0].d[j] * i + carry) % p;
 			carry = (polynom[i][0].d[j] * i + carry) % p;//считаем перенос
 		}
 	}
 	polynom.shift();//удаляем первый элемент, ибо он 0
 	return(polynom);
 }
