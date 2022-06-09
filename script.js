function JumpMario(){
    const mario = document.querySelector('.mario')
    mario.addEventListener('click', jump)

}

function jump(){
    this.classList.add('jump');
    setTimeout(()=>{
        this.classList.remove('jump')
    },1000)

    
}

JumpMario()

