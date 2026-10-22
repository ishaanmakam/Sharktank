/* 13 contrail-aware routing */
const c13=document.getElementById('c13'),g13=c13.getContext('2d');
function draw13(t){const W=760,H=330;g13.clearRect(0,0,W,H);
  const cx=380,cy=170;const gr=g13.createRadialGradient(cx,cy,10,cx,cy,140);gr.addColorStop(0,'rgba(191,233,255,.45)');gr.addColorStop(1,'rgba(191,233,255,0)');g13.fillStyle=gr;g13.beginPath();g13.ellipse(cx,cy,210,110,0,0,7);g13.fill();
  g13.font='14px JetBrains Mono, monospace';g13.fillStyle='#bfe9ff';g13.fillText('ICE-SUPERSATURATED AIR',cx-100,cy+4);
  g13.fillStyle='#8aa3ae';g13.fillText('SEA',22,180);g13.fillText('GEG',W-56,180);
  const k=Math.min(1,(t%6)/4);
  g13.setLineDash([6,8]);g13.strokeStyle='rgba(138,163,174,.6)';g13.lineWidth=2;g13.beginPath();g13.moveTo(70,170);g13.lineTo(W-70,170);g13.stroke();g13.setLineDash([]);
  const path=x=>{const u=(x-70)/(W-140);return 170-Math.sin(Math.PI*u)*150};
  g13.strokeStyle='#ffd447';g13.lineWidth=4;g13.beginPath();g13.moveTo(70,170);const xe=70+(W-140)*k;for(let x=70;x<=xe;x+=4)g13.lineTo(x,path(x));g13.stroke();
  g13.fillStyle='#e9f4f7';g13.beginPath();g13.arc(xe,path(xe),7,0,7);g13.fill();
  g13.fillStyle='#ffd447';g13.fillText('ILLUSTRATION: THE ROUTE BENDS AROUND CONTRAIL-FORMING AIR',22,H-16);}

draws.t13=draw13;
