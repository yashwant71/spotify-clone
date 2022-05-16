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
            // e.target.classList.remove('fa-pause-circle');
            // e.target.classList.add('fa-play-circle');
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



let container =document.getElementsByClassName('container');
// container.addEventListener('scroll', ()=>{
// })
// var scrr =0;
// var temp =0;
// function myscroll() {
//     scrr = container.pageYOffset;
//     if(scrr>temp){
//         temp =scrr;
//         document.getElementById('ncs')[0].style.opacity="0.4";
//     }
//     else{
//         document.getElementById('ncs')[0].style.opacity="0";

//     }

// }