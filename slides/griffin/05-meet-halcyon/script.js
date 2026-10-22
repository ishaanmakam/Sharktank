/* 5 the plane, top view, with hotspots */
(function(){const s=document.getElementById('plane');
  const body='M590 60 C620 60 636 110 638 190 L642 420 L1080 560 L1100 610 L644 560 L646 760 L760 830 L760 860 L600 840 L590 880 L580 840 L420 860 L420 830 L534 760 L536 560 L80 610 L100 560 L538 420 L542 190 C544 110 560 60 590 60 Z';
  el('path',{d:body,fill:'rgba(47,180,220,.06)',stroke:'#e9f4f7','stroke-width':3,'stroke-linejoin':'round',pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1,id:'pbody'},s);
  // riblet hatching on wing
  const rb=el('g',{opacity:.25,id:'rib'},s);for(let x=660;x<1060;x+=14)el('line',{x1:x,y1:446+(x-642)*.32,x2:x+30,y2:446+(x-642)*.32+30,stroke:'#2fb4dc','stroke-width':1.2},rb);
  // tubercles on leading edge (right wing)
  let d='M642 420';for(let k=0;k<16;k++){const x=642+k*27.5,y=420+k*8.8;d+=` Q ${x+14} ${y-6}, ${x+27.5} ${y+8.8}`}el('path',{d,fill:'none',stroke:'#2fb4dc','stroke-width':2.5,id:'tub',opacity:0},s);
  // LH2 tank and fuel cells
  el('rect',{x:556,y:560,width:68,height:170,rx:34,fill:'rgba(191,233,255,.25)',stroke:'#bfe9ff','stroke-width':2,id:'lh2',opacity:0},s);
  [[760,505],[420,505]].forEach(([x,y])=>{el('rect',{x:x-26,y:y-10,width:52,height:20,rx:4,fill:'rgba(255,212,71,.35)',stroke:'#ffd447','stroke-width':2,class:'fc',opacity:0},s)});
  const props=el('g',{id:'props',opacity:0},s);[[770,470],[410,470],[930,520],[250,520]].forEach(([x,y])=>{const g=el('g',{transform:`translate(${x} ${y})`},props);const r=el('g',{class:'spin'},g);for(let a=0;a<3;a++)el('path',{d:'M0 0 L4 -34 L-4 -34 Z',fill:'#e9f4f7',transform:`rotate(${a*120})`},r)});
  // superconducting line
  el('path',{d:'M590 560 L590 500 L770 500 M590 500 L410 500',stroke:'#ffd447','stroke-width':3,fill:'none','stroke-dasharray':'8 6',id:'sc',opacity:0},s);
  const H=[['Kingfisher nose','#2fb4dc',590,95,700,70,'start'],['Fiber-optic nerves','#ffd447',590,230,700,220,'start'],['Whale-fin leading edge','#2fb4dc',700,440,760,360,'start'],['Shark-skin riblets','#2fb4dc',900,520,960,450,'start'],['Albatross hinged tips','#2fb4dc',1090,585,1170,670,'end'],['Thermal loop + water tap','#f2873d',600,770,700,800,'start'],['Refuels from a hydrogen hub','#6fd6a0',590,880,700,900,'start'],['Self-healing skin','#b89cff',570,300,330,250,'end'],['Superconducting cables','#ffd447',500,500,440,380,'end'],['Owl-edge quiet props','#2fb4dc',250,520,230,640,'end'],['Fuel cells','#ffd447',420,505,400,690,'end'],['Composite LH₂ tank','#b89cff',590,650,480,770,'end']];
  H.forEach((h,i)=>{const g=el('g',{class:'hs','data-i':i},s);el('line',{x1:h[2],y1:h[3],x2:h[4],y2:h[5],stroke:h[1],'stroke-width':1.5,opacity:.8},g);
    const dot=el('circle',{cx:h[2],cy:h[3],r:8,fill:h[1]},g);el('circle',{cx:h[2],cy:h[3],r:8,fill:'none',stroke:h[1],'stroke-width':2,class:'ring'},g);
    el('text',{x:h[4]+(h[6]==='end'?-8:8),y:h[5]+7,'text-anchor':h[6]},g,h[0])});
})();
let t5t=[];hooks.t5=()=>{t5t.forEach(clearTimeout);t5t=[];const b=document.getElementById('pbody');b.style.transition='none';b.style.strokeDashoffset=1;void b.getBBox();
  t5t.push(setTimeout(()=>{b.style.transition='stroke-dashoffset 1.8s cubic-bezier(.4,0,.2,1)';b.style.strokeDashoffset=0},200));
  ['tub','lh2','props','sc'].forEach((id,i)=>{const e=document.getElementById(id);e.style.transition='none';e.setAttribute('opacity',0);t5t.push(setTimeout(()=>{e.style.transition='opacity .6s';e.setAttribute('opacity',1)},1600+i*200))});
  document.querySelectorAll('#plane .fc').forEach(e=>{e.setAttribute('opacity',0);t5t.push(setTimeout(()=>e.setAttribute('opacity',1),2000))});
  document.querySelectorAll('#plane .hs').forEach(g=>{g.style.transition='none';g.style.opacity=0;t5t.push(setTimeout(()=>{g.style.transition='opacity .5s';g.style.opacity=1},2200+(+g.dataset.i)*230))})};

draws.t5=t=>{document.querySelectorAll('#plane .spin').forEach(r=>r.setAttribute('transform',`rotate(${(t*600)%360})`));document.querySelectorAll('#plane .ring').forEach(r=>{const k=(t*.8)%1;r.setAttribute('r',8+k*14);r.setAttribute('opacity',1-k)})};
