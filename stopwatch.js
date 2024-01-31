 let milisecond = 0;
let second = 0;
let minute = 0;
let constant = 0;
let lapTimes = [];
let lapNumber = 1;
let running = false;

const start = () => {
  running = true;
    constant = setInterval(add, 10);
}

const pause = () => {
  clearInterval(constant);
  running = false;
}

const reset = () => {
  clearInterval(constant);
  milisecond = 0;
    second = 0;
  minute = 0;
  lapNumber = 1;
  lapTimes =[];
  running = false;
  updateTime();
  updateLaps();
}

const lap = () => {
  if(running){
  const lapInfo = {
      lapNumber: lapNumber++,
      lapTime: formatTime(minute) + ":" + formatTime(second) + ":" + formatTime(milisecond),
  };
  lapTimes.push(lapInfo);
  updateLaps();
}
}
const add = () => {
  milisecond +=10;
  if (milisecond === 1000) {
    second++;
    milisecond = 0;
  }
  if (second === 60) {
    minute++;
    second = 0;
  }
  updateTime();
}

const updateTime=()=>{
    document.getElementById("box").innerHTML = formatTime(minute) + ":" + formatTime(second) + "." + formatTime(milisecond);
};
const formatTime = (time) => {
  return (time < 10) ? "0" + time : time;
}
const updateLaps = () => {
  document.getElementById("laps").innerHTML = lapTimes.map(lap => `Lap ${lap.lapNumber}: Lap Time: ${lap.lapTime}`).join("<br>");
}