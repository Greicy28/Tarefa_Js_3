// Converte uma string para um número inteiro
function convertToInt(string) {
    // Sua implementação aqui
    function convertToInt(string){
        let converstring=parseInt(string);
         return converstring
       }
       
    }
console.log(convertToInt('42'))

// Converte um número inteiro para uma string
function convertToString(number) {
    // Sua implementação aqui
    let conversao=number.toString();
    return conversao;
   }
   console.log(convertToString(123))

// Converte um valor para um booleano
function convertToBoolean(value) {
    // Sua implementação aqui
    if(value==0){
        return false
      }else{
        return true
      }
}
 
console.log(convertToBoolean(1))

module.exports = { convertToInt, convertToString, convertToBoolean };