/* 9 self-healing vascular skin */
(function(){const s=document.getElementById('heal');
  for(let y=40;y<420;y+=34)el('line',{x1:20,y1:y,x2:880,y2:y,stroke:'rgba(184,156,255,.18)','stroke-width':12},s);
  el('path',{d:'M20 150 C 200 110, 300 200, 480 150 S 760 120, 880 170',stroke:'#2fb4dc','stroke-width':6,fill:'none',opacity:.85},s);
  el('path',{d:'M20 290 C 220 330, 330 240, 500 290 S 760 320, 880 270',stroke:'#f2873d','stroke-width':6,fill:'none',opacity:.85},s);
  el('text',{x:24,y:128,'font-family':'JetBrains Mono, monospace','font-size':16,fill:'#2fb4dc'},s,'RESIN CHANNEL');el('text',{x:24,y:330,'font-family':'JetBrains Mono, monospace','font-size':16,fill:'#f2873d'},s,'HARDENER CHANNEL');
  el('path',{id:'crack',d:'M470 30 L455 110 L485 170 L450 240 L490 300 L462 410',stroke:'#e9f4f7','stroke-width':4,fill:'none',pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1},s);
  el('path',{id:'fill',d:'M470 30 L455 110 L485 170 L450 240 L490 300 L462 410',stroke:'#6fd6a0','stroke-width':12,fill:'none',opacity:0,'stroke-linecap':'round'},s);
  el('text',{id:'hlab',x:520,y:230,'font-family':'Bricolage Grotesque, sans-serif','font-size':34,'font-weight':800,fill:'#6fd6a0',opacity:0},s,'healed');})();
let t9t=[];hooks.t9=()=>{t9t.forEach(clearTimeout);t9t=[];const c=document.getElementById('crack'),f=document.getElementById('fill'),l=document.getElementById('hlab');
  c.style.transition='none';c.style.strokeDashoffset=1;f.style.transition='none';f.setAttribute('opacity',0);l.setAttribute('opacity',0);c.setAttribute('opacity',1);void c.getBBox();
  t9t.push(setTimeout(()=>{c.style.transition='stroke-dashoffset .9s steps(8)';c.style.strokeDashoffset=0},800));
  t9t.push(setTimeout(()=>{f.style.transition='opacity 1.4s';f.setAttribute('opacity',.85)},2100));
  t9t.push(setTimeout(()=>{l.style.transition='opacity .6s';l.setAttribute('opacity',1);c.style.transition='opacity 1s';c.setAttribute('opacity',.15)},3200))};
