// Soma dos números inteiros de 1 a n
function somaNumeros(n) {
    // Sua implementação aqui
  if(n==1){
    return 1;
  }else{
    return n+somaNumeros(n -1);
  }
  
  }
  console.log(somaNumeros(5));
  
  // Verifica se um número é par
  function ehPar(number) {
    // Sua implementação aqui
    function ehPar(number) {
      // Sua implementação aqui
    if(number%2 !=0){
    return false;  
    }else{
      return true;
    }
    
    }
    
  }
  console.log(ehPar(4));
  
  function fibonacci(n) {
    // Sua implementação aqui
    function fibonacci(n) {
      if(n<=1){
        return n;
      }else{
        return fibonacci(n-1)+fibonacci(n-2);
      }
    }
    
  }
  console.log(fibonacci(6));
  
  module.exports = { somaNumeros, ehPar, fibonacci };