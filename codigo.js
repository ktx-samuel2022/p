
//esse comando cria uma lista com os convidados
var matrizNomes = []
function adicionar()
{
    //o valor que a pessoa digitou é guardado na variável convidado 
 var convidado =  document.getElementById("nome1").value;
    //depois, disso, ele é adicionado na matriz
matrizNomes.push(convidado)
    //e então, a matriz é organizada por ordem alfabética
   matrizNomes.sort()

    //esse comando limpa a caixa de texto
   document.getElementById("nome1").value = '';
    //esses comandos exibe a lista de nomes
    document.getElementById("mostrarNomes").innerHTML=matrizNomes;
    document.getElementById("mostrarNomes").style.display = "block"
}

function pesquisar(){
    //esse comando guarda na variável o que a pessoa digitou para pesquisar
    var consulta = document.getElementById("consulta").value
    //a variável quantidade guarda o número de vezes que o nome foi encontrado
    var q = 0;
    
    for(var i = 0;i< matrizNomes.length;i++){
        //esse comando compara o que a pessoa digitou com o nome da lista
       if(consulta==matrizNomes){
            //quando são iguais, a quantidade aumenta
            q++
       }    
    }        

    //esse comando exibe a quantidade
   document.getElementById("resultado").innerHTML= "Nome encontrado "+ q +"vez(es)";
}

