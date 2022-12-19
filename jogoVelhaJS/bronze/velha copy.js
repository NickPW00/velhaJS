let play = 0

function jogadas(num){
    let base = document.getElementById(`tile${num}`)
    /* alert(`Casa ${num}`) */
    console.log(base)
    vez(base)
    estilo(base)
    vitoriaH("X")
    vitoriaV("X")
    vitoriaD("X")
    vitoriaH("O")
    vitoriaV("O")
    vitoriaD("O")
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
}
function estilo(base){
    let visto = base.style 
    visto.pointerEvents = "none"
    visto.fontSize = "50px"
    visto.backgroundColor = "rgb(0, 255, 0, 0.6)"
}

function vitoriaH(letra){
    biblioteca()
    if(tile1.innerHTML == letra && tile2.innerHTML == letra && tile3.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu`
    } else if(tile4.innerHTML == letra && tile5.innerHTML == letra && tile6.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu`
    } else if(tile7.innerHTML == letra && tile8.innerHTML == letra && tile9.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu`
    }
}

function vitoriaV(letra){
    biblioteca()
    if(tile1.innerHTML == letra && tile4.innerHTML == letra && tile7.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu`
    } else if(tile2.innerHTML == letra && tile5.innerHTML == letra && tile8.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu`
    } else if(tile3.innerHTML == letra && tile6.innerHTML == letra && tile9.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu`
    }
}
function vitoriaD(letra){
    biblioteca()
    if(tile1.innerHTML == letra && tile5.innerHTML == letra && tile9.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu`
    } else if(tile3.innerHTML == letra && tile5.innerHTML == letra && tile7.innerHTML == letra){
        document.getElementById("vencedor").innerHTML = `${letra} venceu`
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