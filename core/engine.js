const stage=document.getElementById('stage');
function fit(){const s=Math.min(innerWidth/1920,innerHeight/1080);stage.style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();
const slides=[...document.querySelectorAll('.slide')];
const foot=document.getElementById('foot');slides.forEach(()=>foot.appendChild(document.createElement('i')));
let cur=-1,T0=performance.now();const hooks={},draws={};
const NS='http://www.w3.org/2000/svg';
function el(tag,attrs,parent,text){const e=document.createElementNS(NS,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);if(text!=null)e.textContent=text;if(parent)parent.appendChild(e);return e}
function countUp(root){root.querySelectorAll('[data-count]').forEach(n=>{const to=parseFloat(n.dataset.count),dec=+(n.dataset.dec||0),pre=n.dataset.pre||'',suf=n.dataset.suf||'';
  const host=n.closest('.r');const delay=host?parseFloat(getComputedStyle(host).getPropertyValue('--d'))||0:0;const t0=performance.now()+delay*1000+250,dur=1300;
  const f=v=>pre+(dec?v.toFixed(dec):Math.round(v).toLocaleString('en-US'))+suf;n.textContent=f(0);
  (function st(){const k=Math.min(1,Math.max(0,(performance.now()-t0)/dur)),e=1-Math.pow(1-k,3);n.textContent=f(to*e);if(k<1&&n.closest('.slide').classList.contains('active'))requestAnimationFrame(st);else n.textContent=f(to)})()})}
function go(i){
  if(i<0||i>=slides.length||i===cur)return;const prev=slides[cur],next=slides[i];
  slides.forEach(s=>s.style.zIndex='');if(prev)prev.style.zIndex=1;next.style.zIndex=2;
  next.classList.remove('on');void next.offsetWidth;next.classList.add('active','on');
  if(prev){next.classList.add('entering');const s=document.getElementById('streak');s.classList.remove('run');void s.offsetWidth;s.classList.add('run');
    setTimeout(()=>{prev.classList.remove('active','on');next.classList.remove('entering')},880)}
  cur=i;T0=performance.now();
  const c=next.dataset.c;stage.style.setProperty('--c',c);document.getElementById('whon').textContent=next.dataset.who.toUpperCase();
  [...foot.children].forEach((b,k)=>{b.className=k<i?'done':k===i?'now':''});
  document.getElementById('ntt').textContent='SPEAKER NOTES · '+(i+1)+' / '+slides.length;document.getElementById('ntx').textContent=NOTES[i]||'';
  countUp(next);if(hooks[next.id])hooks[next.id]();
  try{history.replaceState(null,'','#s'+(i+1))}catch(e){}
}
const nxt=()=>go(cur+1),prv=()=>go(cur-1);
addEventListener('keydown',e=>{
  if(['ArrowRight','ArrowDown',' ','PageDown','Enter'].includes(e.key)){e.preventDefault();nxt()}
  else if(['ArrowLeft','ArrowUp','PageUp','Backspace'].includes(e.key)){e.preventDefault();prv()}
  else if(e.key==='Home')go(0);else if(e.key==='End')go(slides.length-1);
  else if(e.key==='n'||e.key==='N')document.getElementById('notes').classList.toggle('show');
  else if(e.key==='f'||e.key==='F'){try{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen().catch(()=>{})}catch(err){}}
});
addEventListener('click',e=>{if(e.target.closest('a'))return;(e.clientX<innerWidth*0.18)?prv():nxt()});
let tx=null;addEventListener('touchstart',e=>{tx=e.touches[0].clientX},{passive:true});
addEventListener('touchend',e=>{if(tx==null)return;const dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>40)(dx<0?nxt:prv)();tx=null},{passive:true});

