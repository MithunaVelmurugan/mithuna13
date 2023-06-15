const second = document.querySelector('.secs');
const minute = document.querySelector('.mins');
const hour = document.querySelector('.hrs');
setInterval(activate,1000)
function activate(){
    const time = new Date();
    const sec = time.getSeconds()/60;
    const min = ((sec+time.getMinutes())/60);
    const hr = ((min+time.getHours())/12);
    second.style.setProperty('--rotation',sec*360);
    minute.style.setProperty('--rotation',min*360);
    hour.style.setProperty('--rotation',hr*360);
    console.log(min)

} 

activate()