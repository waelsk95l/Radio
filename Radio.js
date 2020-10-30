
setInterval(()=>{
    var width = screen.width;
    var height = screen.height;
	
 if(width<=1024){
 
     document.getElementById("audio_player").style.width = width+"px";
     document.getElementById("audio_player").style.height = height+"px";

    }
    if(screen.width<=320){
     document.getElementById("audio_player").style.height = 100+height+"px";

    }
});


class Player{
    constructor(){
        
        this.audio_file = document.getElementById("audio_file");
        this.isPlayed;

        this.play = document.getElementById("play");
        this.play.addEventListener("click",()=>{this.play_pause();});

        this.audios =[];
        this.audios[0] = "http://icepe1.infomaniak.ch/mc-doualiya.mp3";
        this.audios[1] = "http://mbn-channel-05.akacast.akamaistream.net/7/25/233454/v1/ibb.akacast.akamaistream.net/mbn_channel_05";
        this.audios[2] = "http://audiostreaming.itworkscdn.com:9018/;stream.mp3";
    
        this.names = [];
        this.names[0] = "راديو مورتيكارلو";
        this.names[1] = "راديو سوا";
        this.names[2] = "راديو المدى";
        
        this.numberAudio =0;

     

        this.next = document.getElementById("next");
        this.next.addEventListener("click",()=>{
            this.next_audio();
        });
           

        this.back = document.getElementById("back");
        this.back.addEventListener("click",()=>{
            
          this.back_audio();  
         
        });

        this.setSource();
    }
    play_pause(){
        if(this.isPlayed==false){
            this.play.src = "./img/pause.png";
            this.audio_file.play();
            this.isPlayed=true;
        }
        else{
            this.play.src = "./img/play.png";
            this.audio_file.pause();
            this.isPlayed=false;
        }
    }

    next_audio(){
         if(this.numberAudio<this.audios.length-1){
                ++this.numberAudio;
                this.isPlayed = false; 
                }
         else   {
                this.numberAudio = 0;
                }
                this.setSource();
    }
    back_audio(){
        if(this.numberAudio>0){
            --this.numberAudio;
            this.isPlayed = false; 
         }
         else{
            this.numberAudio = this.audios.length -1;
            
         }
      
         this.setSource();
    }
    setSource(){
 
    document.getElementById("radio-title").innerHTML = this.names[this.numberAudio];
    document.getElementById("audio_file").src = this.audios[this.numberAudio];

    this.play_pause();
    }

}
onload = new Player();

class Volume{
    constructor(){

        this.audio_file = document.getElementById("audio_file");

        var volume = document.getElementById("volume");
        this.audio_file.volume= 50/100;
        
        volume.addEventListener("change",()=>{
         this.audio_file.volume = volume.value / 100 ;
        } );
    }

}
onload = new Volume();

class Speed_Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");

        var speed = document.getElementById("speed");
        speed.addEventListener("change",()=>{
         this.audio_file.playbackRate = speed.value / 100;
        });
       
    }

}
onload =new Speed_Volume();

class Colors{
    constructor(){
        if(localStorage.getItem("SaveColor")==null){
    
            document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
       
        }

    this.color1 = document.getElementById("color-1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color-1");
    });

    this.color2 = document.getElementById("color-2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color-2");
    });

    this.color3 = document.getElementById("color-3");
    this.color3.addEventListener("click",()=>{
        this.selectColor("color-3");
    });

    this.color4 = document.getElementById("color-4");
    this.color4.addEventListener("click",()=>{
        this.selectColor("color-4");
    });

    this.selectColor(localStorage.getItem("SaveColor"));
    }

    selectColor(color){
       
        this.header = document.getElementById("header");
        if(color == "color-1"){
            this.header.style.background ="rgb(27, 27, 27)";
            document.body.style.background = "rgb(27, 27, 27)";
        }
        else if(color == "color-2"){
            this.header.style.background ="#ff5353";
            document.body.style.background ="#ff5353";
        }

        else if(color == "color-3"){
            this.header.style.background ="#009688";
            document.body.style.background ="#009688";
        }

        else if(color == "color-4"){
            this.header.style.background = "#222a4c";
            document.body.style.background ="#222a4c";
        }
        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();
