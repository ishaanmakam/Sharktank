/* 14 airport hub chain */
const HUB={pts:[]};
(function(){const s=document.getElementById('hub');const N=[['☀ Solar on airport land',120,90],['Electrolyzer (water → H₂)',120,250],['Liquefier to −253 °C',120,410],['Insulated tank farm',520,410],['Hydrant to the gate',520,250],['Halcyon H2-50',520,90]];
  HUB.path='M200 90 L200 410 L600 410 L600 90';el('path',{d:HUB.path,stroke:'rgba(111,214,160,.25)','stroke-width':22,fill:'none','stroke-linejoin':'round'},s);
  HUB.pe=el('path',{d:HUB.path,fill:'none',stroke:'none'},s);HUB.g=el('g',{},s);
  N.forEach((n,i)=>{const g=el('g',{class:'hn',opacity:0,'data-i':i},s);el('rect',{x:n[1]-100+80,y:n[2]-34,width:320,height:66,rx:10,fill:'#0c2431',stroke:'#6fd6a0','stroke-width':2},g);el('text',{x:n[1]+80+60,y:n[2]+7,'text-anchor':'middle'},g,n[0])});
  el('text',{x:415,y:560,'text-anchor':'middle','font-family':'JetBrains Mono, monospace','font-size':16,fill:'#8aa3ae','font-weight':400},s,'small airports: swappable pods by truck');})();
let t14t=[];hooks.t14=()=>{t14t.forEach(clearTimeout);t14t=[];HUB.pts.length=0;document.querySelectorAll('#hub .hn').forEach(e=>{e.style.transition='none';e.setAttribute('opacity',0);t14t.push(setTimeout(()=>{e.style.transition='opacity .5s';e.setAttribute('opacity',1)},500+(+e.dataset.i)*300))})};
function draw14(t){const L=HUB.pe.getTotalLength();if(Math.random()<.35)HUB.pts.push(0);while(HUB.g.firstChild)HUB.g.removeChild(HUB.g.firstChild);
  for(let i=HUB.pts.length-1;i>=0;i--){HUB.pts[i]+=6;if(HUB.pts[i]>L){HUB.pts.splice(i,1);continue}const p=HUB.pe.getPointAtLength(HUB.pts[i]);el('circle',{cx:p.x,cy:p.y,r:5,fill:HUB.pts[i]<L*.45?'#6fd6a0':'#bfe9ff'},HUB.g)}}

draws.t14=draw14;
