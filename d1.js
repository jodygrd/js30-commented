//on keystroke, play the audio file associated with the drum kit, and add the CSS class 'playing' to illuminate the on-screen box
function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"`);
  if (!audio) return; //stop
  audio.load(); //rewind to start
  // audio.currentTime = 0 
  audio.play();
  key.classList.add('playing') //jquery - key.addClass('playing')  
}

//de-illuminate the on-screen box once the transition is complete
function removeTransition(event) {
  if (event.propertyName !== 'transform') return; //if no transform, skip
  this.classList.remove('playing');
}

//start sound/visual transition
window.addEventListener('keydown', playSound);

//end sound/visual transition
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
