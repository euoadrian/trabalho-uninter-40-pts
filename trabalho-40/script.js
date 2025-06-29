const botao = document.getElementById("botao");
let mensagem;

botao.addEventListener('click', function() {
    if (!mensagem) {
        mensagem = document.createElement("p");
        mensagem.textContent = "Você não precisa ser bom para fazer algo, você precisa fazer algo para ficar bom!";
        mensagem.id = "fraseMotivacional";
        mensagem.style.fontSize = "20px";
        this.insertAdjacentElement('afterend', mensagem);
    } 
    
    else {
        mensagem.remove();
        mensagem = null;
    }
});