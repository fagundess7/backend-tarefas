function saudacao(nomeJogador) {
    console.log("Bem vindo ao jogo, " + nomeJogador + "!")
}

saudacao("Nathi");

//Função que recebe um valor
function subirDeNivel(nivelAtual) {
    return nivelAtual +1;
}

let meuNivel = 10;

let nivelAtualizado = subirDeNivel(meuNivel);

console.log('seu novo nível: + nivelAtualizado');