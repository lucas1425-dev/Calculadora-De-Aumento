

function valor(){
  var valor = parseInt(document.getElementById("valor").value)
 


    var porcentagem = document.getElementById("porcentagem").value
   


    var valordaconta = (valor * porcentagem)/100
    
    function soma(valor1,valor2){
        return valor1 += valor2 ;
    }
    
   
    

    document.getElementById("valordaconta").innerHTML = "" + valordaconta.toFixed(2)+"R$"
     document.getElementById("valortotal").innerHTML = soma(valordaconta,valor).toFixed(2)+"R$"

}
 
      
   
 

 

  
  
  

    
 
    
