  // select each hand using CSS class
  const secondHand = document.querySelector('.second-hand')
  const minuteHand = document.querySelector('.min-hand')
  const hourHand = document.querySelector('.hour-hand')

  function setDate() {
    //create date object
    const now = new Date();
    //grab times with inbuilt methods
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    //set time to the degrees of a clock face
    const secondsDegrees = (seconds * 6) + 90;
    const minutesDegrees = (minutes * 6) + 90;
    const hoursDegrees = (hours * 30) + 90;

    //rotate each hand according to selector
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    //console log the exact time
    console.log(hours + ':' + minutes + ':' + seconds)
  }

  //run function once/second
  setInterval(setDate, 1000)