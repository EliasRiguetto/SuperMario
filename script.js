const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

function JumpMario(){
    ['click','keydown'].forEach((event)=>{
        document.addEventListener(event, jump)
    })
}

function jump(){
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump')
    },1000)
}

function loop(){
    const time = setInterval(()=>{

        const pipePosition = pipe.offsetLeft
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
        
        if(pipePosition <= 80 && pipePosition > 0 && marioPosition < 130){
           pipe.style.animation = 'none';
           pipe.style.left = `${pipePosition}px`
           mario.style.animation = 'none';
           mario.style.bottom = `${marioPosition}px`
           mario.src = "imagem/game-over.png"
           mario.style.width = '80px';
           clearInterval(time)
        }
    },10)
}

loop()
JumpMario()

