let play = 0
let partida = 0
pontos1 = 0
pontos2 = 0

function jogadas(num){
    let base = document.getElementById(`tile${num}`)
    /* alert(`Casa ${num}`) */
    console.log(base)
    vez(base)
    estilo(base)
    vezJogador()
    vitoriaH("X")
    vitoriaV("X")
    vitoriaD("X")
    vitoriaH("O")
    vitoriaV("O")
    vitoriaD("O")
    pontosAhMais()
    pontuacao()
    console.log(play)
    console.log(partida)
}

function vez(base){
    let vezSpan = document.getElementById("lero")
    ++play
    if(play % 2){
        base.innerHTML = "X"
        vezSpan.innerHTML = "O"
    } else {
        base.innerHTML = "O"
        vezSpan.innerHTML = "X"
    }
    velha(play)
}

function estilo(base){
    let visto = base.style 
    visto.pointerEvents = "none"
    visto.fontSize = "50px"
    visto.backgroundColor = "rgb(0, 255, 0, 0.6)"
}

function reiniciarEt2(){
    reinEt2Biblioteca()
    reiniciarPt1()
    vezJogador()
}

function reinEt2Biblioteca(){
    reiniciarEt1(1)
    reiniciarEt1(2)
    reiniciarEt1(3)
    reiniciarEt1(4)
    reiniciarEt1(5)
    reiniciarEt1(6)
    reiniciarEt1(7)
    reiniciarEt1(8)
    reiniciarEt1(9)
}

function vezJogador(){
    if(partida % 2){
        if(play % 2){
            document.getElementById("jogador").innerHTML = "1"
        } else {
            document.getElementById("jogador").innerHTML = "2"
        }
    } else {
        if(play % 2){
            document.getElementById("jogador").innerHTML = "2"
        } else {
            document.getElementById("jogador").innerHTML = "1"
        }
    }
}

function reiniciarPt1(){
    document.getElementById("vencedor").innerHTML = ""
    document.getElementById("lero").innerHTML = "X"
    if(play < 0){
        play -= play
    } else {
        play = 0
    }
    partida++
}

function velha(play){
    if(play == 9 && document.getElementById("vencedor").innerHTML == ""){
        document.getElementById("vencedor").innerHTML = "Deu Velha!"
    }
}

function vitoriaH(letra){
    biblioteca()
    baseVitoria(letra, tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9)
}

function vitoriaV(letra){
    biblioteca()
    baseVitoria(letra, tile1, tile4, tile7, tile2, tile5, tile8, tile3, tile6, tile9)
    
}
function vitoriaD(letra){
    biblioteca()
    if(tile1.innerHTML == letra && tile5.innerHTML == letra && tile9.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu!`
    } else if(tile3.innerHTML == letra && tile5.innerHTML == letra && tile7.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu!`
    }
}

function biblioteca(){
    let tile1 = document.getElementById(`tile1`)
    let tile2 = document.getElementById(`tile2`)
    let tile3 = document.getElementById(`tile3`)
    let tile4 = document.getElementById(`tile4`)
    let tile5 = document.getElementById(`tile5`)
    let tile6 = document.getElementById(`tile6`)
    let tile7 = document.getElementById(`tile7`)
    let tile8 = document.getElementById(`tile8`)
    let tile9 = document.getElementById(`tile9`)
}

function reiniciarEt1(num){
    let base = document.getElementById(`tile${num}`)
    base.innerHTML = ""
    let visto = base.style 
    visto.removeProperty("pointer-events")
    visto.removeProperty("background-color")
}


function baseVitoria(letra, n1, n2, n3, n4, n5, n6, n7, n8, n9){
    if((n1).innerHTML == letra && (n2).innerHTML == letra && (n3).innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu!`
    } else if((n4).innerHTML == letra && (n5).innerHTML == letra && (n6).innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu!`
    } else if((n7).innerHTML == letra && (n8).innerHTML == letra && (n9).innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu!`
    }
}

function pontuacao(){
    if(document.getElementById("vencedor").innerHTML == "X venceu!" && document.getElementById("jogador").innerHTML == 2 ){
        pontos1 += 5
        document.getElementById("pontos1").innerHTML = pontos1
        document.getElementById("vencedor").innerHTML += " (Jogador 1)" 
    } else if(document.getElementById("vencedor").innerHTML == "X venceu!" && document.getElementById("jogador").innerHTML == 1 ){
        pontos2 += 5
        document.getElementById("pontos2").innerHTML = pontos2
        document.getElementById("vencedor").innerHTML += " (Jogador 2)" 
    } else if(document.getElementById("vencedor").innerHTML == "O venceu!" && document.getElementById("jogador").innerHTML == 2 ){
        pontos1 += 5
        document.getElementById("pontos1").innerHTML = pontos1
        document.getElementById("vencedor").innerHTML += " (Jogador 1)" 
    } else if(document.getElementById("vencedor").innerHTML == "O venceu!" && document.getElementById("jogador").innerHTML == 1 ){
        pontos2 += 5
        document.getElementById("pontos2").innerHTML = pontos2
        document.getElementById("vencedor").innerHTML += " (Jogador 2)" 
    }
}

function pontosAhMais(){
    if(play == 5 && document.getElementById("vencedor").innerHTML == "X venceu!" && document.getElementById("jogador").innerHTML == 2 ){pontos1 += 2}
    if(play == 5 && document.getElementById("vencedor").innerHTML == "X venceu!" && document.getElementById("jogador").innerHTML == 1 ){pontos2 += 2}
    if(play == 6 && document.getElementById("vencedor").innerHTML == "O venceu!" && document.getElementById("jogador").innerHTML == 2 ){pontos1 += 2}
    if(play == 6 && document.getElementById("vencedor").innerHTML == "O venceu!" && document.getElementById("jogador").innerHTML == 1 ){pontos2 += 2}
    /*
    Observação: Para que não ficasse injusto, mudei que:
        -O jogador que fechar a partida com ATÉ 3 JOGADAS, ganha mais 2 pontos do que o adversario.
    */
}


/*
Partes de função que foram resumidas mas podem ser usadas:

// Função vitoriaH
/* if(tile1.innerHTML == letra && tile2.innerHTML == letra && tile3.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu!`
    } else if(tile4.innerHTML == letra && tile5.innerHTML == letra && tile6.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu!`
    } else if(tile7.innerHTML == letra && tile8.innerHTML == letra && tile9.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu!`
    } */

// Função vitoriaV

/* if(tile1.innerHTML == letra && tile4.innerHTML == letra && tile7.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu!`
    } else if(tile2.innerHTML == letra && tile5.innerHTML == letra && tile8.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu!`
    } else if(tile3.innerHTML == letra && tile6.innerHTML == letra && tile9.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu!`
    } */

