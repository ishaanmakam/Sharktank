/* 3 energy vs volume comparison */
(function(){const s=document.getElementById('cmp');
  el('text',{x:0,y:30,'font-size':18},s,'SAME ENERGY, TWO FUELS');
  const rows=[['ENERGY PER KILOGRAM',1,2.87,'1×','2.87×'],['TANK VOLUME NEEDED',1,4,'1×','4×']];
  rows.forEach((r,k)=>{const y0=90+k*330;el('text',{x:0,y:y0,'font-size':17},s,r[0]);
    [['Jet fuel',r[1],'#8aa3ae',r[3]],['Liquid H₂',r[2],'#bfe9ff',r[4]]].forEach((b,j)=>{const y=y0+30+j*120,w=b[1]/4*760;
      el('text',{x:0,y:y+60,'font-size':22,fill:'#e9f4f7','font-family':'Figtree, sans-serif'},s,b[0]);
      const rc=el('rect',{x:150,y:y+20,width:0,height:70,rx:8,fill:b[2],class:'grow','data-w':w},s);
      el('text',{x:150+w+16,y:y+66,'font-size':30,fill:b[2],'font-family':'Bricolage Grotesque, sans-serif','font-weight':800,class:'gl',opacity:0},s,b[3]);})});
  const fr=el('g',{id:'frost'},s);for(let i=0;i<40;i++)el('circle',{cx:150+Math.random()*740,cy:500+Math.random()*260,r:1.5+Math.random()*2.5,fill:'#bfe9ff',opacity:.55},fr);
  el('text',{x:750,y:790,'font-size':26,fill:'#bfe9ff','font-family':'Bricolage Grotesque, sans-serif','font-weight':800,'text-anchor':'end',class:'gl',opacity:0},s,'−253 °C');
})();
let t3t=[];hooks.t3=()=>{t3t.forEach(clearTimeout);t3t=[];document.querySelectorAll('#cmp .grow').forEach((r,i)=>{r.style.transition='none';r.setAttribute('width',0);void r.getBBox();t3t.push(setTimeout(()=>{r.style.transition='width 1.2s cubic-bezier(.2,.8,.2,1)';r.setAttribute('width',r.dataset.w)},500+i*300))});
  document.querySelectorAll('#cmp .gl').forEach((g,i)=>{g.style.transition='none';g.setAttribute('opacity',0);t3t.push(setTimeout(()=>{g.style.transition='opacity .6s';g.setAttribute('opacity',1)},1500+i*300))})};
