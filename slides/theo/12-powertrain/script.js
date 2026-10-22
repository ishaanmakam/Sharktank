/* 12 powertrain wire */
var P12={e:[]};
(function(){const s=document.getElementById('wire');const N=[['FUEL CELL',60],['SUPERCONDUCTING LINE',400],['MOTOR + PROP',740]];
  el('path',{d:'M60 150 L740 150',stroke:'rgba(255,212,71,.25)','stroke-width':18,'stroke-linecap':'round'},s);
  el('path',{d:'M60 150 L740 150',stroke:'#bfe9ff','stroke-width':3,'stroke-dasharray':'2 10',opacity:.6},s);
  N.forEach(n=>{el('circle',{cx:n[1],cy:150,r:30,fill:'#0c2431',stroke:'#ffd447','stroke-width':3},s);el('text',{x:n[1],y:226,'text-anchor':'middle'},s,n[0])});
  el('text',{x:400,y:100,'text-anchor':'middle',fill:'#bfe9ff'},s,'chilled by the −253 °C fuel');
  const pr=el('g',{transform:'translate(740 150)'},s);P12.rot=el('g',{},pr);for(let a=0;a<3;a++)el('path',{d:'M0 0 L5 -26 L-5 -26 Z',fill:'#e9f4f7',transform:`rotate(${a*120})`},P12.rot);
  P12.g=el('g',{},s);})();
function draw12(t){if(!P12.g)return;if(Math.random()<.6)P12.e.push(60);while(P12.g.firstChild)P12.g.removeChild(P12.g.firstChild);
  for(let i=P12.e.length-1;i>=0;i--){P12.e[i]+=7;if(P12.e[i]>740){P12.e.splice(i,1);continue}el('circle',{cx:P12.e[i],cy:150,r:4,fill:'#ffd447'},P12.g)}
  P12.rot.setAttribute('transform',`rotate(${(t*720)%360})`)}

draws.t12=draw12;
