const prizes = [Exos Lucky Draw-Fannyerjiu
"Esmeralda - Lady Thief",
"Karie - Ice Talon",
"Mathilda - Dream Groove",
"Floryn - Springtide",
"Benedetta - Honor Blade",
"Unlucky Box",
"Normal Lucky Box",
"Exos Lucky Box ⭐"
];

const forcedIndex = 7;

const wheel = document.getElementById("wheel");

function buildWheel(){
  const step = 360/prizes.length;

  const colors = [
    "#ff7675","#74b9ff","#55efc4","#ffeaa7",
    "#a29bfe","#fd79a8","#81ecec","#fab1a0"
  ];

  let gradient="conic-gradient(";

  prizes.forEach((p,i)=>{
    gradient += `${colors[i%colors.length]} ${i*step}deg ${(i+1)*step}deg,`;
  });

  wheel.style.background = gradient.slice(0,-1)+")";
}

buildWheel();

function spin(){

  const step = 360/prizes.length;

  const deg = 360*6 + (360 - forcedIndex*step - step/2);

  wheel.style.transform = `rotate(${deg}deg)`;

  setTimeout(()=>{

    alert(
"🎉 Congratulations,You get Exos Lucky Box！"
    )(The Reward Will Be Sent To Your Mail-Box Within 30 Minutes.;

  },5200);
             }
