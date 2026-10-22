/* 11 rivets vs weld */
(function(){const s=document.getElementById('rivet');el('text',{x:0,y:20},s,'RIVETED ALUMINUM');el('text',{x:400,y:20},s,'WELDED THERMOPLASTIC');
  el('rect',{x:0,y:40,width:360,height:170,rx:6,fill:'rgba(138,163,174,.15)',stroke:'#8aa3ae'},s);el('rect',{x:400,y:40,width:364,height:170,rx:6,fill:'rgba(242,135,61,.1)',stroke:'#f2873d'},s);
  for(let r=0;r<4;r++)for(let c=0;c<12;c++)el('circle',{cx:22+c*29,cy:70+r*38,r:5,fill:'#8aa3ae',class:'rv8'},s);
  for(let r=0;r<4;r++)el('line',{x1:416,y1:70+r*38,x2:416,y2:70+r*38,stroke:'#f2873d','stroke-width':5,'stroke-linecap':'round',class:'wd','data-r':r},s);
  el('text',{x:0,y:250},s,'≈ thousands of holes per fuselage');el('text',{x:400,y:250},s,'re-melts into new parts');})();
let t11t=[];hooks.t11=()=>{t11t.forEach(clearTimeout);t11t=[];document.querySelectorAll('#rivet .wd').forEach(l=>{l.style.transition='none';l.setAttribute('x2',416);void l.getBBox();t11t.push(setTimeout(()=>{l.style.transition='x2 1.2s ease';l.setAttribute('x2',748)},900+(+l.dataset.r)*250))})};
