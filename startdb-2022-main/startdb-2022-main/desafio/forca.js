class Forca {
  static letrasChutadas = [];
  static vida = 6;
  static palavraSecreta = "";
  static palavra = "";

  setPalavraSecreta(palavra) {
    Forca.palavraSecreta = palavra.toUpperCase();

    for (let i = 0; i < palavra.length; i++) {
      Forca.palavra += i;
    }
  }

  chutar(letra) {
    if (Forca.letrasChutadas.includes(letra)) {
      console.log("Você ja chutou essa letra");
      this.buscarEstado();
      return;
    } else if (Forca.palavraSecreta.includes(letra)) {
      for (let i = 0; i < Forca.palavraSecreta.length; i++) {
        if (letra === Forca.palavraSecreta[i]) {
          Forca.palavra = Forca.palavra.replace(
            i.toString(),
            letra.toUpperCase()
          );
        }
      }
      this.buscarEstado();
      return;
    }
    Forca.letrasChutadas.push(letra);
    Forca.vida += -1;
    this.buscarEstado();
  }
  verificaAcerto() {}

  buscarEstado() {
    if (Forca.vida === 0) {
      return "perdeu";
    } else if (Forca.palavraSecreta === Forca.palavra) {
      return "ganhou";
    } else {
      return "aguardando chute";
    }
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: Forca.letrasChutadas,
      vidas: Forca.vida,
      palavra: Forca.palavra,
    };
  }
}

module.exports = Forca;
