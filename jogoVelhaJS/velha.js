let player = 0;

function aviso(event, num){
    let marca = event.target; 
    console.log(marca);
    alert(`Casa ${num}`);
    player++
    if(player % 2){
        marca.style.backgroundColor = 'darkblue';
    } else{
        marca.style.backgroundColor = 'darkred';
    }
    console.log(player)
}

/* function alternancia(){
} */
/* function jogador(){
} */