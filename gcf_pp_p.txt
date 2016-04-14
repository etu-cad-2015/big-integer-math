function gcf_pp_p
{
  // нод многочленов
  //Родионова К. 5301


//цикл работает когда степень a>=b
if (deg_p_n (a)>= deg_p_n (b)
{

   while (mod_pp_p (a, b) != 0) //работает пока остаток от деления не равна нулю
    {int tmp = mod_pp_p (a, b); //записываем остаток от деления a%b
         a=b;
         b=tmp;
    }
   return b;
  
else
    
     return 0;      
   