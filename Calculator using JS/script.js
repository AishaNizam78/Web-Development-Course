function clearScreen()
 { document.getElementById("result").value = ""; 

  }
  function setScreenValue(value) { 
     document.getElementById("result").value += value;
     function calculateResult() { 
         const resultElement = document.getElementById("result"); 
         const expression = resultElement.value.trim();
         My certificates 15
          
         if (expression === '') {
             resultElement.value = 'Enter an expression'; 
             return; 
              } 
            
              try { 
            
                resultElement.value = eval(expression); }
                 catch (e) 
                 { resultElement.value = 'Invalid expression'; 
                     }
                    }