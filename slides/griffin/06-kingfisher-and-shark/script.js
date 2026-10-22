/* 6 flow over smooth vs riblet skin */
const c6=document.getElementById('c6'),g6=c6.getContext('2d');let P6=[];
function draw6(t){g6.clearRect(0,0,780,240);
  g6.font='14px JetBrains Mono, monospace';g6.fillStyle='#8aa3ae';g6.fillText('SMOOTH SKIN',14,22);g6.fillText('SHARK-SKIN RIBLETS',14,142);
  g6.fillStyle='#2fb4dc';for(let x=0;x<780;x+=10){g6.beginPath();g6.moveTo(x,236);g6.lineTo(x+5,226);g6.lineTo(x+10,236);g6.fill()}
  g6.fillStyle='#8aa3ae';g6.fillRect(0,114,780,3);
  if(P6.length<140)for(let k=0;k<3;k++){const lane=Math.random()<.5?0:1;P6.push({lane,x:-10,y:(lane?150:30)+Math.random()*70,v:2+Math.random()*2.5,ph:Math.random()*6})}
  for(let i=P6.length-1;i>=0;i--){const p=P6[i];p.x+=p.v;const wob=p.lane?Math.sin(p.x/60+p.ph)*.6:Math.sin(p.x/22+p.ph)*((p.y-30)/70<.6?5:2.5);
    g6.strokeStyle=p.lane?'rgba(47,180,220,.75)':'rgba(242,135,61,.65)';g6.lineWidth=2;g6.beginPath();g6.moveTo(p.x-14,p.y+wob);g6.lineTo(p.x,p.y+wob);g6.stroke();if(p.x>790)P6.splice(i,1)}}

draws.t6=draw6;
