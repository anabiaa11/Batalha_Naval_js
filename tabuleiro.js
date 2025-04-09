/** O código fonte agora da acessa a Eduarda */

var Tabuleiro = [];

for (let l = 0; l < 5; l++) {
    Tabuleiro[l] = []; 
    for (let c = 0; c < 5; c++) {
        Tabuleiro[l][c] = false;
    }
}

for(let i = 0; i < 5; i++){
    let posx = Math.floor(Math.random() * 5);
    let posy = Math.floor(Math.random() * 5);
    Tabuleiro [posx][posy] = true;
}






console.log(Tabuleiro);
