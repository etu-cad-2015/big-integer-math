MathLib.gcf_pp_p = function (a, b){
  // нод многочленов
  //Родионова К. 5301


//цикл работает когда степень a>=b
    if (MathLib.deg_p_n (a)>= MathLib.deg_p_n (b))
{

   while (MathLib.mod_pp_p (a, b) != 0) //работает пока остаток от деления не равна нулю
    {
	var tmp = MathLib.mod_pp_p (a, b); //записываем остаток от деления a%b
         a=b;
         b=tmp;
    }
   return b;
  
}else return 0;      
};
