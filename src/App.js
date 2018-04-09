import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './static/App.css';
import './static/aesthetics.css';
import './static/index.css';

var rapperFace = [
  "https://static1.squarespace.com/static/5105d89ee4b0869f6416d903/5137a990e4b09e6afa7e25d6/57a154dc579fb3405017f282/1470190819165/coloring-book-poster.jpg?format=500w",
  "https://media.pitchfork.com/photos/5929a4ce13d1975652138dc8/1:1/w_600/a61ee51a.jpg",
  "https://images.shazam.com/coverart/t311712925-b1208724643_s400.jpg",
  "https://cdn.shopify.com/s/files/1/1555/4903/products/BITTSM_1024x1024.jpg?v=1499012854",
  "https://sslb.ulximg.com/image/405x405/artist/1391023197_771123ccbf79b155bde0acd3709da291.jpg/e1035a2e5271c1b889414e1c7c175e6c/1391023197_600_1359263847_e44b3b098846d2282eac5ec231e5bb30_95.jpg",
  "http://is3.mzstatic.com/image/thumb/Music69/v4/46/11/ec/4611ecb2-f247-a39b-0222-bf94994d7fb1/source/600x600bb.jpg"
];
var rapperNames = ["Chance", "Childish Gambino", "XXXTENTACION", "Travis Scott", "Lil Jon", "Desiigner"];
var choirPics = [
  "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/1f/dd/c2/1fddc2ed-06dc-58b6-f32e-078971a2b17a/UMG_cvrart_00602567380580_01_RGB72_3000x3000_18UMGIM02231.jpg/268x0w.jpg",
  "https://images.genius.com/685d5f086260ce1bccca9e7e8209d9f2.1000x1000x1.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Camila_%28Official_Album_Cover%29_by_Camila_Cabello.png/220px-Camila_%28Official_Album_Cover%29_by_Camila_Cabello.png",
  "https://upload.wikimedia.org/wikipedia/en/b/b0/Demi_Lovato_-_Tell_Me_You_Love_Me_%28Official_Standard_Album_Cover%29.png",
  "https://upload.wikimedia.org/wikipedia/en/b/b5/ImagineDragonsEvolve.jpg"
];
var choirNames = ["Zedd", "Dua Lipa", "Camila Cabello", "Demi Lovato", "Imagine Dragons"];

class TunesBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {audioFile: "./music", choirNames: choirNames, choirPics: choirPics, imageActive: false};
    this.audioFunc = this.audioFunc.bind(this);
    this.handleChoirClick = this.handleChoirClick.bind(this);
  }

  audioFunc(choirArtist) {
    var audio = document.getElementById('music');
    if(choirArtist === 'Stop') {
      console.log('Stopped');
      audio.pause();
      audio.currentTime = 0;
      this.setState({audioFile: './music'});
    } else {
      console.log('music set');
      this.setState({audioFile: './music/' + choirArtist + '.mp3'});
      audio.volume = 0.18;
      audio.play();
      audio.onended = function() {
        document.getElementById(choirArtist).classList.remove('imagesActive');
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }

  handleChoirClick(name) {
    var currentChoir;
    for(var j = 0; j < choirNames.length; j++) {
      currentChoir = document.getElementById(choirNames[j]);
      if(currentChoir.id === name && !currentChoir.classList.contains('imagesActive')) {
        currentChoir.classList.add('imagesActive');
        this.audioFunc(currentChoir.id);
      } else if(currentChoir.id === name && currentChoir.classList.contains('imagesActive')) {
          currentChoir.classList.remove('imagesActive');
          this.audioFunc("Stop");
      } else {
        currentChoir.classList.remove('imagesActive');
      }
    }
  }

  render() {
    return (
      <div>
      <h2>Play a Tune:</h2>
         <div className = "tunesBox">
            {this.state.choirPics.map(function(choirItems, i) {
              return <span key = {i} className = "keyBinds">
                <img id = {choirNames[i]} onClick = {() => this.handleChoirClick(choirNames[i])} className = 'images' src= {choirItems}></img>
              </span>
            }.bind(this))}
            <audio autoPlay id = "music" src = {this.state.audioFile}/>
         </div>
       </div>
    );
  }
}

class RapBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {rapperFace: rapperFace, rapperNames: rapperNames};
    this.handleRapClick = this.handleRapClick.bind(this);
    this.audioFunc = this.audioFunc.bind(this);
    this.handleRapKeyPress = this.handleRapKeyPress.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleRapKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleRapKeyPress);
  }

  audioFunc(rapArtist) {
    console.log(rapArtist);
    var audio = new Audio('./rappers/' + rapArtist + '.mp3');
    audio.volume = 0.35;
    audio.play();
    audio.onended = function() {
      audio.pause();
      audio.currentTime = 0;
    }
  }

  handleRapClick(name) {
    var currentRapper;
    for(var j = 0; j < rapperNames.length; j++) {
      currentRapper = document.getElementById(rapperNames[j]);
      if(currentRapper.id === name) {
        this.audioFunc(currentRapper.id);
      }
    }
  }

  handleRapKeyPress(input){
    if(input.key === "1") {
      this.audioFunc("Chance");
    } else if(input.key === "2") {
      this.audioFunc("Childish Gambino");
    } else if(input.key === "3") {
      this.audioFunc("XXXTENTACION");
    } else if(input.key === "4") {
      this.audioFunc("Travis Scott");
    } else if(input.key === "5") {
      this.audioFunc("Lil Jon");
    } else if(input.key === "6") {
      this.audioFunc("Desiigner");
    }
  }

  render() {
    return (
      <div>
         <h2>Remix it!</h2>
          <div className = "tunesBox">
          {this.state.rapperFace.map(function(rapItems, i) {
            return <span key = {i} className = "keyBinds">
                <img id = {rapperNames[i]} onClick = {() => this.handleRapClick(rapperNames[i])} className = 'images' src= {rapItems}></img>
                <h3>{i+1}</h3>
            </span>
          }.bind(this))}
          </div>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {rapperFace: rapperFace, choirPics: choirPics};
  }



  render() {
    return (
      <div className="App">
        <div className = "wrapper">
          <div className = "landing">
              <h1>Rapping to The Choir</h1>
          </div>
          <div className = "container-fluid">
            <TunesBox/>
            <RapBox/>
          </div>
          <footer className = "footer">
            <i className = "fa fa-music"/>
            <h3 className = "footNote">Remixed by Tim Nguyen</h3>
            <i className = "fa fa-volume-up"/>
            <div>
              <a className = "icons" target = "_blank" href = "https://linkedin.com/in/timothy-nguyen-9809/">
                <i className = "fa fa-linkedin-square"/>
              </a>
              <a className = "icons" target = "_blank" href = "https://twitter.com/Tim_OhTee">
                <i className = "fa fa-twitter-square"/>
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
