/* 10 thermal cascade */
const LOOP={nodes:[['LH₂ tank','−253 °C',90,'#bfe9ff'],['Superconducting cables','0 Ω',450,'#ffd447'],['Heat exchanger','warms H₂',810,'#f2873d'],['Fuel cells','≈ +80 °C',1170,'#ffd447'],['Cabin water tap','H₂O',1560,'#6fd6a0']],pts:[]};
(function(){const s=document.getElementById('loop');
  el('path',{d:'M150 210 L1500 210',stroke:'rgba(226,240,245,.15)','stroke-width':26,'stroke-linecap':'round'},s);
  const grad=el('linearGradient',{id:'tg'},el('defs',{},s));[['0','#bfe9ff'],['.5','#f2873d'],['1','#6fd6a0']].forEach(([o,c])=>el('stop',{offset:o,'stop-color':c},grad));
  el('path',{d:'M150 210 L1500 210',stroke:'url(#tg)','stroke-width':6,'stroke-linecap':'round',opacity:.7},s);
  LOOP.g=el('g',{},s);
  LOOP.nodes.forEach((n,i)=>{const g=el('g',{class:'nd',opacity:0,'data-i':i},s);el('circle',{cx:n[2],cy:210,r:66,fill:'#0c2431',stroke:n[3],'stroke-width':3},g);
    el('text',{x:n[2],y:120,'text-anchor':'middle'},g,n[0]);el('text',{x:n[2],y:218,'text-anchor':'middle',class:'tt',fill:n[3]},g,n[1])});
  el('path',{d:'M1170 290 C 1170 370, 900 370, 810 290',stroke:'#f2873d','stroke-width':3,fill:'none','stroke-dasharray':'6 8',class:'nd',opacity:0,'data-i':4},s);
  el('text',{x:990,y:390,'text-anchor':'middle',class:'tt nd',fill:'#f2873d',opacity:0,'data-i':4},s,'waste heat flows back to warm the fuel');})();
let t10t=[];hooks.t10=()=>{t10t.forEach(clearTimeout);t10t=[];LOOP.pts.length=0;document.querySelectorAll('#loop .nd').forEach(e=>{e.style.transition='none';e.setAttribute('opacity',0);t10t.push(setTimeout(()=>{e.style.transition='opacity .6s';e.setAttribute('opacity',1)},500+(+e.dataset.i)*350))})};
function draw10(t){if(t<1&&LOOP.pts.length===0){}
  if(Math.random()<.5)LOOP.pts.push({x:150,v:4+Math.random()*3});
  while(LOOP.g.firstChild)LOOP.g.removeChild(LOOP.g.firstChild);
  for(let i=LOOP.pts.length-1;i>=0;i--){const p=LOOP.pts[i];p.x+=p.v;if(p.x>1500){LOOP.pts.splice(i,1);continue}const k=(p.x-150)/1350;
    const col=k<.5?`rgb(${191+k*2*(242-191)|0},${233-k*2*(233-135)|0},${255-k*2*(255-61)|0})`:`rgb(${242-(k-.5)*2*(242-111)|0},${135+(k-.5)*2*(214-135)|0},${61+(k-.5)*2*(160-61)|0})`;
    el('circle',{cx:p.x,cy:210+Math.sin(p.x/30)*5,r:5,fill:col},LOOP.g)}}

draws.t10=draw10;
