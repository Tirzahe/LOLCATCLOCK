let earlyMorning = 3;
let morning = 7;
let noon = 12;
let evening = 17;
let partyTime = false;
let night = 20;
let lateNight = 22;
let partyTimeButton = document.getElementById("partyTimeButton");
let wakeUp = document.getElementById("wakeUpTimeSelector");
let lunch = document.getElementById("lunchTimeSelector");
let nap = document.getElementById("napTimeSelector");

const updateClock = () => {
  let time = new Date().getHours();
  let messageText;
  let timeEventJS = document.getElementById('timeEvent');
  let lolcatImg = document.getElementById('lolcat');
  let image = "https://goo.gl/JKCmMf";

  // Set the right messageText and image if time is partyTime 
  // console.log("hour is", time);
  if (partyTime) {
    messageText = "PARTY TIME!";
    image = "https://i.ytimg.com/vi/HDOMbFRU-uk/hqdefault.jpg";
  } else if (time === Number(wakeUp.value)) {
    messageText = "";
    image = "https://i.chzbgr.com/full/8796232448/h3CB75653/";
  } else if (time === Number(lunch.value)) {
    messageText = "LUNCH TIME!";
    image = "https://www.worldsbestcatlitter.com/clearing-the-air/wp-content/uploads/2016/08/cat-food-blog-image2.jpg";
  } else if (time === Number(nap.value)) {
    messageText = "shh-shhhhh, iz sleepin'";
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHuo5bbc1sPK4spp3y8WxLT_BVfvIKagzwB-8JBDcOrLEgMDEb"
  } else if (time >= earlyMorning && time < morning) {
    messageText = "Top o' the Mornin'";
    image = "http://www.catster.com/wp-content/uploads/2015/03/st-patricks-day-cat-05.jpg";
    console.log(messageText);
  } else if (time >= morning && time < noon) {
    messageText = "Good Morning my friend!";
    image = "https://4.bp.blogspot.com/-Mr1ORZCZ6Z0/Vr57rgsXpmI/AAAAAAAA11I/OdSkGHDfFA8/s640/caturday.jpg";
    console.log(messageText);
  } else if (time >= noon && time < evening) {
    messageText = "Good Afternoon!";
    image = "http://cdn.fishki.net/upload/post/201408/20/1295699/7949510-r3l8t8d-650-funny-cats-if-it-fits-i-sits-21.jpg";
    console.log(messageText);
  } else if (time >= evening && time < night) {
    messageText = "Good Evening!";
    image = "https://s-media-cache-ak0.pinimg.com/originals/be/2d/6f/be2d6f2002e8c90bb0cf0f0e752591ed.jpg";
    console.log(messageText);
  } else if (time >= night && time < lateNight) {
    messageText = "Good Night!";
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl2sXqk-hrbcKSPgKyFxh-nqcEy2Fr-TD609hHmc7WF2VGKOgD";
    console.log(messageText);
  } else if (time >= lateNight || time < earlyMorning) {
    messageText = "HOOT, HOOT!";
    image = "https://s-media-cache-ak0.pinimg.com/736x/6d/f4/5a/6df45a5e10c63cce0c047f3fc6f20f86.jpg";
    console.log(messageText);
  }

  timeEventJS.innerText = messageText;
  lolcatImg.src = image;

  const showCurrentTime = () => {
    // display the string on the webpage
    let clock = document.getElementById('clock');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    // Set hours 
    if (hours >= noon) {
      meridian = "PM";
    }
    if (hours > noon) {
      hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    // put together the string that displays the time
    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
  };
  showCurrentTime();
}
updateClock();

let oneSecond = 1000;//1000 milliseconds is equal to 1 second
setInterval(updateClock, oneSecond);


  //wake up
const wakeUpEvent = (event) => {
  let wakeUp = wakeUpTimeSelector.value;
  updateClock();
}
  wakeUp.addEventListener('change', wakeUpEvent);

  //lunch
const lunchEvent = (event) => {
  let lunch = lunchTimeSelector.value;
  updateClock();
}
  lunch.addEventListener('change', lunchEvent);

  //nap
const napEvent = (event) => {
  let nap = napTimeSelector.value;
  updateClock();
}
  nap.addEventListener('change', napEvent);



const partyEvent = () => {
  partyTime = !partyTime;
};
  partyTimeButton.addEventListener('click', partyEvent);