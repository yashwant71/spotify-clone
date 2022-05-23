console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "NCS Axol and alex", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sky High Electromania NCS", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tell Me NCS Release ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Circles - NCS", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "NCS Turn It Up", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "NCS StartThatFire 2", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "NCS Different Heaven", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "NCS hellcat", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "NCS- To Myself", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "NCS Safe And Sound", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "martin_garrix_animals", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "martin_garrix_khalid_ocean", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Martin Garrix - Oops", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "martin garrix - wiee", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Martin Garrix Byte", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "martin garrixmartin garrix pizza", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "martin garrix poison", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "martin garrix troye", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "Ocean - Martin Garrix", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "There For You - Martin Garrix", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        
        songIndex = parseInt(e.target.id);
        if(e.target.classList.contains('fa-play-circle')){

            makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        }
        else {
            makeAllPlays();
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        }
    })
})
//next song
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
//previous song
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

//volume control 
let myvolumebar =document.getElementById('myvolumebar');
myvolumebar.addEventListener('change',()=>{
audioElement.volume = myvolumebar.value/100;
})

// hiding transitions
let hidesong =document.getElementById('hidesong');
let songbox  =document.getElementById('ncssongs');
hidesong.addEventListener('click', ()=>{
if(hidesong.classList.contains('fa-chevron-circle-down')){
    hidesong.classList.remove('fa-chevron-circle-down');
    hidesong.classList.add('fa-chevron-circle-left');
    songbox.classList.remove('show');
    songbox.classList.add('hide');

    document.getElementsByClassName('pagehead')[0].style.flexDirection ="row-reverse"
    document.getElementsByClassName('pagehead')[0].style.alignItems ="normal"
    document.getElementsByClassName('pagehead')[0].style.height ="45px"

    document.getElementById('headingh1').style.fontSize ="1.9em"
document.getElementById('ncs').style.height= "50px"

}
else{
    hidesong.classList.remove('fa-chevron-circle-left');
    hidesong.classList.add('fa-chevron-circle-down');
    songbox.classList.remove('hide');
    songbox.classList.add('show');

    document.getElementsByClassName('pagehead')[0].style.flexDirection ="column"
    document.getElementsByClassName('pagehead')[0].style.alignItems ="center"
    document.getElementsByClassName('pagehead')[0].style.height ="170px"

    document.getElementById('headingh1').style.fontSize ="2em"
    document.getElementById('ncs').style.height= "141px"
}
})



document.getElementsByClassName('pagehead2')[0].style.flexDirection ="row-reverse"
document.getElementsByClassName('pagehead2')[0].style.alignItems ="normal"
document.getElementsByClassName('pagehead2')[0].style.height ="45px"

document.getElementById('headingh2').style.fontSize ="1.9em"
document.getElementById('martin').style.height= "50px"


let hidesong2 =document.getElementById('hidesong2');
let songbox2  =document.getElementById('martinsongs');
hidesong2.addEventListener('click', ()=>{
if(hidesong2.classList.contains('fa-chevron-circle-left')){
    hidesong2.classList.remove('fa-chevron-circle-left');
    hidesong2.classList.add('fa-chevron-circle-down');
    songbox2.classList.remove('hide');
    songbox2.classList.add('show');

    document.getElementsByClassName('pagehead2')[0].style.flexDirection ="column"
    document.getElementsByClassName('pagehead2')[0].style.alignItems ="center"
    document.getElementsByClassName('pagehead2')[0].style.height ="170px"

    document.getElementById('headingh2').style.fontSize ="2em"
    document.getElementById('martin').style.height= "141px"

}
else{
    hidesong2.classList.remove('fa-chevron-circle-down');
    hidesong2.classList.add('fa-chevron-circle-left');
    songbox2.classList.remove('show');
    songbox2.classList.add('hide');

    document.getElementsByClassName('pagehead2')[0].style.flexDirection ="row-reverse"
    document.getElementsByClassName('pagehead2')[0].style.alignItems ="normal"
    document.getElementsByClassName('pagehead2')[0].style.height ="45px"

    document.getElementById('headingh2').style.fontSize ="1.9em"
document.getElementById('martin').style.height= "50px"
}
})