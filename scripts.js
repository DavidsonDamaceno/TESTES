const accountInput = document.getElementById('numberInput');  
const calculateBtn = document.querySelector('.sendBtn');
const result = document.querySelector('.results');

// SUM
function calculateNum(number) { 
   const n = Math.floor(Number(number));
     
   if (Number.isNaN(n) || n <= 0) return null; 
   if (n > 170) return 'Número muito grande para calcular o fatorial.';
   if (n === 0 || n === 1) return 1;
   let resultado = 1;
   
   for (let i = 2; i <= n; i++){
    resultado *= i;
}
return resultado;
}

function getInputValue() {  // função para obter o valor do input
   return accountInput.value;  // retorna o valor do input
}

calculateBtn.addEventListener('click', function() {  // evento de clique no botão
   
    const accountNumber = getInputValue();  // obtém o valor do input
   const calculatedNumber = calculateNum(accountNumber);  // calcula o novo número
   if (calculatedNumber === null) {  // verifica se o cálculo retornou null
      result.textContent = 'Por favor, insira um número válido.';  // exibe mensagem de erro
      return;  // sai da função se o número for inválido
   }
   result.innerHTML = `<p>Your new account number is: ${calculatedNumber}</p>`;  // exibe o resultado
});



//DIVIDE
/*function calculateNum(number){
    const n = Number(number);
    if (Number.isNaN(n)) return null;
return n / 2;
}

function getInputValue(){
    return accountInput.value;
}

calculateBtn.addEventListener('click', function() {
   const accountNumber = getInputValue();
   const calculatedNumber = calculateNum(accountNumber);
    if (calculatedNumber === null) {
        result.textContent = 'Por favor, insira um número válido.';
        return;
    }
    result.innerHTML = `<p>Your new account number is: ${calculatedNumber}</p>`;
});


//MULTIPLY
function calculateNum(number){
    const n = Number(number);
    if(Number.isNaN(n)) return null
    return n * 5;
}

function getInputValue(){
return accountInput.value;
}

calculateBtn.addEventListener('click', function(){
    const accountNumber = getInputValue()
    const calculatedNumber = calculateNum(accountNumber)
    if (calculatedNumber === null) {
        result.innerHTML =  'Por favor, insira um número válido.';
        return;
    }
    result.innerHTML =  `<p>Your new account number is: ${calculatedNumber}</p>`;
});


//MIN
function calculateNum(number){
    const n = Number(number);
    if (Number.isNaN(n)) return null;
    return n - 3;
}

function getInputValue(){
    return accountInput.value;
}

calculateBtn.addEventListener('click', function(){
    const accountNumber = getInputValue()
    const calculatedNumber = calculateNum(accountNumber)
    if (calculatedNumber === null) {
         result.innerHTML =  'Por favor, insira um número válido.';
        return;
    }
    result.innerHTML = `<p>Your new account number is: ${calculatedNumber}</p>`;
});*/

