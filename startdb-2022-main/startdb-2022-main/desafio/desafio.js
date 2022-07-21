const readline = require("readline-sync");
const Forca = require("./forca");

const jogo = new Forca();
jogo.setPalavraSecreta("abacaxi");

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
  const chute = readline.question("Aguardando chute: \n").toUpperCase();

  if (chute.length > 1) {
    console.log("Insira apenas uma letra");
  } else {
    jogo.chutar(chute);
  }

  console.log(jogo.buscarDadosDoJogo());
}

console.log("você " + jogo.buscarEstado());
