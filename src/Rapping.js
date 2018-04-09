import React from 'react';
import './static/aesthetics.css';

var rapperFace = [
  "https://static1.squarespace.com/static/5105d89ee4b0869f6416d903/5137a990e4b09e6afa7e25d6/57a154dc579fb3405017f282/1470190819165/coloring-book-poster.jpg?format=500w",
  "https://media.pitchfork.com/photos/5929a4ce13d1975652138dc8/1:1/w_600/a61ee51a.jpg",
  "http://theboombox.com/files/2014/11/ForestHillsDrive-cvr.jpg",
  "http://hiphopdx-production.s3.amazonaws.com/2017/02/Future-Future-album-cover-art.jpg",
  "https://is3-ssl.mzstatic.com/image/thumb/Music/v4/1f/e2/ca/1fe2cac4-ef84-c01b-0025-9c9635eadd6d/UMG_cvrart_00602537542338_01_RGB72_1500x1500_13UAAIM79861.jpg/1200x630bb.jpg",
  "http://www.billboard.com/files/media/lil-yachty-album-cover-billboard-1240.jpg",
  "https://cdn.pastemagazine.com/www/articles/Kendrick%20Lamar-%20Damn-%20Lead.jpg"
];
var choirPics = [
  "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/1f/dd/c2/1fddc2ed-06dc-58b6-f32e-078971a2b17a/UMG_cvrart_00602567380580_01_RGB72_3000x3000_18UMGIM02231.jpg/268x0w.jpg",
  "https://images.genius.com/685d5f086260ce1bccca9e7e8209d9f2.1000x1000x1.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Camila_%28Official_Album_Cover%29_by_Camila_Cabello.png/220px-Camila_%28Official_Album_Cover%29_by_Camila_Cabello.png",
  "https://upload.wikimedia.org/wikipedia/en/b/b0/Demi_Lovato_-_Tell_Me_You_Love_Me_%28Official_Standard_Album_Cover%29.png",
  "https://upload.wikimedia.org/wikipedia/en/b/b5/ImagineDragonsEvolve.jpg"
];
var choirNames = ["Zedd", "Dua Lipa", "Camila Cabello", "Demi Lovato", "Imagine Dragons"];
var audioPlayer = document.createElement("AUDIO");
audioPlayer.loop = true;

class TunesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {choirNames: choirNames, choirPics: choirPics, imageActive: false};
    this.audioFunc = this.audioFunc.bind(this);
    this.handleChoirClick = this.handleChoiceClick.bind(this);
  }

  audioFunc(choirSong) {
    console.log('kk');
    audioPlayer.setAttribute("src", choirSong);
    audioPlayer.volume = 0.2;
    audioPlayer.autoplay;
  }

  handleChoirClick(id) {
    for(var j = 0; j < choirNames.length; j++) {
document.getElementById(choirNames[j]).classList.remove('imagesActive');
    }
    var choirName = document.getElementById(id);
    choirName.classList.toggle('imagesActive');
    if(choirName == "Demi Lovato") {
      this.audioFunc("SorryNotSorry.mp3");
    }
  }

  render() {
    return (
      <div>
      <h2>Choose a Tune:</h2>
         <div className = "tunesBox">
            {this.state.choirPics.map(function(choirItems, i) {
              return <img id = {choirNames[i]} onClick = {this.handleChoirClick} className = 'images' src= {choirItems}></img>
            }.bind(this))}
         </div>
       </div>
    );
  }
}

export default class TunesClass extends React.Component{}
