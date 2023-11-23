let music = document.getElementById("music");

function voltar(){

    music.currentTime -= 10;
}

function avancar(){
    music.currentTime += 10;

}

function diminuir_vel(){

    music.playbackRate -= 0.1;

}

function aumentar_vel(){
    music.playbackRate += 0.1;

}

function play_pause(){
    if(music.paused){
        music.play();
    }
    else music.pause();

}

function stop(){
    music.pause();
    music.currentTime = 0;

}