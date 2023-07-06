const musics = [
    {
        "title": "Acorda Devinho",
        "artist": "Banda Rocketseat",
        "cover": "./assets/img/hans-eiskonen-8Pm_A-OHJGg-unsplash 1.png",
        "file": "./assets/musics/dev.mp3",
        "minutes": 5,
        "seconds": 39
    },
    {
        "title": "Nossa Stack",
        "artist": "Astrid",
        "cover": "./assets/img/relax.jpg",
        "file": "./assets/musics/nossa-track.mp3",
        "minutes": 2,
        "seconds": 49
    },
    {
        "title": "Radio",
        "artist": "Kezia",
        "cover": "./assets/img/radio.jpg",
        "file": "./assets/musics/radio.mp3",
        "minutes": 1,
        "seconds": 52
    },
    {
        "title": "Paint",
        "artist": "Nixie",
        "cover": "./assets/img/paint.jpg",
        "file": "./assets/musics/paint.mp3",
        "minutes": 2,
        "seconds": 20
    },
    {
        "title": "Ferris Wheel",
        "artist": "Andromeda",
        "cover": "./assets/img/ferris-wheel.jpg",
        "file": "./assets/musics/ferris-wheel.mp3",
        "minutes": 5,
        "seconds": 28
    },
    {
        "title": "Rock",
        "artist": "Astrid",
        "cover": "./assets/img/guitar.jpg",
        "file": "./assets/musics/guitar.mp3",
        "minutes": 5,
        "seconds": 4
    }

]

const imgSong = document.querySelector('.song-image')
const title = document.querySelector('.title')
const artists = document.querySelector('.artists')
const timeSong = document.querySelector('#full-time')
const realTime = document.querySelector('#real-time')
const slider = document.querySelector('#id-duration')
const musicAudio = document.querySelector('audio')

let i = 0
let playMusic = true


window.addEventListener('load', loadMusic)
musicAudio.addEventListener('ended', changeNextSong)
musicAudio.addEventListener('timeupdate', upDateTime)
musicAudio.addEventListener('canplay', playEvent)
slider.addEventListener('click', changeTime)


function loadMusic(){

    imgSong.src = musics[i].cover
    title.textContent = musics[i].title
    artists.textContent = musics[i].artist
    musicAudio.src = musics[i].file

    setTime()

}

function playEvent(){
    slider.max = musicAudio.duration
    // console.log('music duration ' + musicAudio.duration)
}

function setTime(){
    timeSong.innerText = `${("0"+ musics[i].minutes).slice(-2)}:${("0"+ musics[i].seconds).slice(-2)}`
}

function changeNextSong(){
    if (i < musics.length-1){
        i++
        loadMusic()
    } else {
        i = 0
        loadMusic()
    }
}

function changePreviousSong(){
    if (i === 0 ){
        i = musics.length-1
        loadMusic()
    } else if (i <= musics.length || i >= 1){
        i--
        loadMusic()
    }
}

function playPauseSong(){

    if (playMusic){
        musicAudio.pause()
        playMusic = false
    } else {
        playMusic = true
        musicAudio.play()
    }
}

function upDateTime(){
    slider.value = musicAudio.currentTime
    realTime.innerHTML = convertTime(musicAudio.currentTime)

}

function convertTime(time){

    /* convertendo para segundos */
    let mins = Math.floor(time / 60)
    var secs = Math.floor(time % 60) // ( time - mins ) * 60

    return `${("0" + mins).slice(-2)}:${("0" + secs).slice(-2)}`

}

function changeTime(newValue){
    musicAudio.pause()
    musicAudio.currentTime = newValue
    slider.value = musicAudio.newValue
    realTime.innerHTML = convertTime(musicAudio.newValue)
    musicAudio.play()
}
