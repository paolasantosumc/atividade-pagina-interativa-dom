const campoNome = document.getElementById("nome");
const botaoEnviar = document.getElementById("btnEnviar");
const mensagem = document.getElementById("mensagem");
const botaoTema = document.getElementById("btnTema");

botaoEnviar.addEventListener("click", function() {

    const nome = campoNome.value;

    if (nome.trim() === "") {
        mensagem.textContent = "Por favor, digite seu nome.";
        return;
    }

    mensagem.textContent = "Olá, " + nome + "! Seja bem-vindo(a)!";

});

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("escuro");

    if(document.body.classList.contains("escuro")){
        botaoTema.textContent = "Modo Claro";
    }else{
        botaoTema.textContent = "Modo Escuro";
    }
});