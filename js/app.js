amigosIncluidos = [];
let btSortear = document.getElementById("btSortear");

function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * (amigosIncluidos.length));
}
function adicionar(){
    let nomeAmigo = document.getElementById("nome-amigo");
    //ver como nao deixar entrar o mesmo nome duas vezes, atualmente n deixa colocar a e a porem deixa roberto e roberto
    if(nomeAmigo.value !== " " ){
        amigosIncluidos.includes(nomeAmigo.value) ? alert("esse nome ja foi ") : amigosIncluidos.push(nomeAmigo.value);
    }
    nomeAmigo.value = " ";
    document.getElementById("lista-amigos").textContent = amigosIncluidos;

    btSortear.classList.remove("botao_desabilitado");
    btSortear.removeAttribute("disabled");
    
}

function exibirTextoNaTela(id, texto) {
    document.getElementById(id).innerHTML += texto;

}

function desabilitarBtSortear() {
    btSortear.setAttribute("disabled", true);
    btSortear.classList.add("botao_desabilitado");
}

function sortear(){
    if(amigosIncluidos.length % 2 == 0){
        let numerosSorteados = [];

        for(i=0; i<amigosIncluidos.length; i++){
            let num = gerarNumeroAleatorio();
            let nome;
            if(i % 2 == 0){
                nome = amigosIncluidos[num] + " --> ";
            }
            else{
                nome = amigosIncluidos[num] + "<br>";
            }
    
            if(numerosSorteados.includes(num)){
                i--;
            }
            else{
                exibirTextoNaTela("lista-sorteio", nome)
                numerosSorteados.push(num);
            }
        }

        desabilitarBtSortear();
    }
    else {
        alert("Adicione mais uma pessoa para que todos tenham seus respectivos pares.");
    }
}

function reiniciar() {
    amigosIncluidos = [];
    btSortear.classList.remove("botao_desabilitado");
    btSortear.removeAttribute("disabled");
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("lista-amigos").innerHTML = "";
}