/* 
 * Автор: Pipfstarrd
 * Группа: 5302
 * Назначение: умножает число в p-ичной системе на p^k (сдвигает на k разрядов)
 * Входные данные: число и степень k
 * Выходные данные: число со сдвигом на k разрядов
 */

MathLib.mul_nk_n = function(number, k) {
  var c = {};
  c.d = [];
  //console.log (number);
  for (var i = number.d.length - 1; i >= 0; i--) { 
  c.d[i+k] = number.d[i]; 
 }
  
  for (var i = k - 1; i >= 0; i--) {
    c.d[i] = 0;
  }
  
  c.s = number.s;
  
  // MathLib.normalize is not needed as we are 100% shure that 
  // the most significant digit != 0
  return c;
}
