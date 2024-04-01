const alphabet = {"`":"a0","1":"a1","2":"a2","3":"a3","4":"a4","5":"a5","6":"a6","7":"a7","8":"as0","9":"as1","0":"as2","-":"as3","=":"as4","q":"as5","w":"as6","e":"as7","r":"b0","t":"b1","y":"b2","u":"b3","i":"b4","o":"b5","p":"b6","[":"b7","]":"c1",'\\':"c2","a":"c3","s":"c4","d":"c5","f":"c6","g":"c7","h":"c8","j":"cs1","k":"cs2","l":"cs3",";":"cs4","\'":"cs5","z":"cs6","x":"cs7","c":"d1","v":"d2","b":"d3","n":"d4","m":"d5",",":"d6",".":"d7","/":"ds1","|":"ds2","Q":"ds3","W":"ds4","E":"ds5","R":"ds6","T":"ds7","Y":"e1","U":"e2","I":"e3","O":"e4","P":"e5","A":"e6","S":"e7","D":"f1","F":"f2","G":"f3","H":"f4","J":"f5","K":"f6","L":"f7","Z":"fs1","X":"fs2","C":"fs3","V":"fs4","B":"fs5","N":"fs6","M":"fs7","~":"g1","!":"g2","@":"g3","#":"g4","$":"g5","%":"g6","^":"g7","&":"gs1","*":"gs2","(":"gs3",")":"gs4","_":"gs5","+":"gs6","{":"gs7"}

function row(i, c) {
  const r = alphabet[c] || c
  return '<tr><th scope="row">' + i + '</th><td>' + c + '</td><td>' + r + '</td></tr>'
  

 // setLetterSound(c);
      // runAudioPlayer(); // Play sound
      // generateNewElement(); // Generate new DOM element to restart the animation
  
  
}

function changeEventHandler(event) {
  const tbody = document.getElementsByTagName('tbody')[0]
  tbody.innerHTML = ''
  for (let i = 0, l = event.target.value.length; i < l; i++) {
    tbody.innerHTML += row(i+1, event.target.value[i])
  }
}

function loadEventHandler() {
  document.getElementsByTagName('input')[0].oninput = changeEventHandler
}

// https://plainjs.com/javascript/events/running-code-when-the-document-is-ready-15/
if (document.readyState !== 'loading') loadEventHandler()
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', loadEventHandler)



// Declaring stuff
  myName = ""; // declaring a variable for my easter egg
  audioPlayer = document.getElementsByTagName('audio')[0];

  // ------ Functions ------
  // Getting the letter sound and playing it.
  function setLetterSound(letterVariable) {
    var mp3Source = document.getElementById('mp3Source');
    var oggSource = document.getElementById('oggSource');
    mp3Source.src = 'soundsiv/' + letterVariable +'.mp3';
    oggSource.src = 'soundsiv/' + letterVariable +'.ogg';
  }

  function setGenericSound() {
    var mp3Source = document.getElementById('mp3Source');
    var oggSource = document.getElementById('oggSource');
    mp3Source.src = 'soundsiv/like-glass.mp3';
    oggSource.src = 'soundsiv/like-glass.ogg';
  }

  // Generating a new element to restart the CSS3 animation.
  function generateNewElement() {
    var elm = document.getElementById('big-char');
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
  }


  // Running the HTML5 audio player
  function runAudioPlayer() {
    audioPlayer.pause();
    // alert('done');
    audioPlayer.load(); // pre loading the audi file
    // audioPlayer.currentTime = 0; // start the audio from the beginning
    audioPlayer.play(); // play the audio
  }

  // Show and hide the about
  // document.getElementById('hide-button').onclick = function() {
   // document.getElementById('about-cont').style.display = "none";
  // }
  /*
  document.getElementById('about-button').onclick = function() {
    document.getElementById('about-cont').style.display = "block";
  }
*/
  
  // On mobile, when the user taps on "Show Keyboard" move the focus to the hidden input
  /*
  document.getElementById('show-keyboard-button').onclick = function() {
    document.getElementById('mobile-text-input').focus();
  }
  */

  document.onkeypress = function(event){ // Do stuff when you press any key in the document

    letterOnScreen = document.getElementById('big-char'); // get the element properties
    console.log(event.charCode);
    if ( // if use pressed on any of these characters which are not numbers or letters
      event.charCode === 13||
      event.charCode === 32||
      event.charCode === 92||
      event.charCode === 96||
      event.charCode === 61||
      event.charCode === 43||
      event.charCode === 45||
      event.charCode === 33||
      event.charCode === 64||
      event.charCode === 35||
      event.charCode === 36||
      event.charCode === 37||
      event.charCode === 94||
      event.charCode === 38||
      event.charCode === 42||
      event.charCode === 40||
      event.charCode === 41||
      event.charCode === 95||
      event.charCode === 91||
      event.charCode === 93||
      event.charCode === 34||
      event.charCode === 39||
      event.charCode === 47||
      event.charCode === 63||
      event.charCode === 62||
      event.charCode === 44||
      event.charCode === 60||
      event.charCode === 46||
      event.charCode === 59||
      event.charCode === 58||
      event.charCode === 123||
      event.charCode === 124||
      event.charCode === 125||
      event.charCode === 126
      ) {
      
      if (event.charCode === 13) { // getting the Enter key
        // letterOnScreen.innerHTML = "Enter";
        changeEventHandler(event);
        // alert('hi');
      } else if (event.charCode === 32) {
        // changeEventHandler(event);
        // letterOnScreen.innerHTML = "Space";
      } else {
        letterOnScreen.innerHTML = String.fromCharCode(event.charCode);
      }
      setLetterSound(event.charCode); // Set the generic sound in the resources of the audio tag
      runAudioPlayer(); // Play sound
      // generateNewElement(); // Generate new DOM element to restart the animation
      changeEventHandler(event);
    } else {
      // letterOnScreen.innerHTML = String.fromCharCode(event.charCode); // getting the pressed character
      // pressedLetter = String.fromCharCode(event.charCode).toLowerCase(); // passing the pressed letter to the function to add it to sources
      setLetterSound(event.charCode);
      runAudioPlayer(); // Play sound
      // generateNewElement(); // Generate new DOM element to restart the animation
      changeEventHandler(event);
    }

    /*
    // An easter egg, if you type my name
    myName += String.fromCharCode(event.charCode);
    console.log(myName);
    if (myName==="mahdi") {
      alert('You typed my name!\n--------------------------------\nNow I will show you my website.');
      window.open('http://mahdif.com','_blank');
    }
    */

  }

/*
  // Mute button
  document.getElementById('mute-button').onclick = function() {
    if (audioPlayer.muted === false) {
      audioPlayer.muted = true;
      document.getElementById('mute-button').innerHTML = "Unmute Sounds";
    } else {
      audioPlayer.muted = false;
      document.getElementById('mute-button').innerHTML = "Mute Sounds";
    }
  }
*/

//load page with cursor in input field (focus)
$(document).ready(function(){
    document.getElementById("big-char").focus();
});