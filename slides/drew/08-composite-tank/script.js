/* 8 tank cross-section */
(function(){const s=document.getElementById('tank');const L=[['Carbon fiber / thermoplastic shell (no metal liner)','#b89cff',0],['Foam + multilayer insulation','#e9f4f7',1],['Vacuum gap','#5f7d89',2],['Liquid hydrogen, −253 °C','#bfe9ff',3]];
  L.forEach((l,i)=>{const r=135-i*28;el('circle',{cx:150,cy:150,r,fill:i===3?'rgba(191,233,255,.35)':'none',stroke:l[1],'stroke-width':i===3?2:14-i*3,class:'ly',opacity:0,'data-i':i},s);
    el('line',{x1:150+r*.7,y1:150-r*.7,x2:330,y2:40+i*62,stroke:l[1],'stroke-width':1,class:'ly',opacity:0,'data-i':i},s);el('text',{x:340,y:46+i*62,class:'ly',opacity:0,'data-i':i},s,l[0])});})();
hooks.t8=()=>{document.querySelectorAll('#tank .ly').forEach(e=>{e.style.transition='none';e.setAttribute('opacity',0);setTimeout(()=>{e.style.transition='opacity .6s';e.setAttribute('opacity',1)},900+(+e.dataset.i)*350)})};
