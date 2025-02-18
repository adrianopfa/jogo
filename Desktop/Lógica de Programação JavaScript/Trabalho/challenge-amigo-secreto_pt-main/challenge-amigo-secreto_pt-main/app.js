
let amigo = [];


function adicionarAmigo() {
    let amigoSecreto =  document.querySelector('#amigo').value;
    
    if (amigoSecreto.trim() !==""){
    amigo.push(amigoSecreto);
    document.querySelector ('#amigo').value = "";
    atualizarlista();

    }else {
        alert('Por favor, insira um nome valido');
    
    }

}
    function sortearAmigo (){
    
        if (amigo.length > 0){// Verifica se o array não está vazio
            let indiceAleatorio = Math.floor(Math.random() * amigo.length);// Gera um índice aleatório
            let amigoSorteado = amigo[indiceAleatorio]; // Obtém o nome sorteado
            console.log (`Amigo sorteado: ${amigoSorteado}`); // Exibe o nome sorteado no console
        }
        else {
            alert('Não há amigos para sortear!')// Mensagem de alerta se o array estiver vazio
        }
    }
function atualizarlista (){
    let listaAmigos = document.querySelector ('#listaAmigos');
    listaAmigos.innerHTML = "";

    amigo.forEach (amigo =>{
        let item = document.createElement('li');
            item.textContent = amigo;
            listaAmigos.appendChild(item);
        
    });
}
