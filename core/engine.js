const stage=document.getElementById('stage');
function fit(){const s=Math.min(innerWidth/1920,innerHeight/1080);stage.style.transform=`translate(-50%,-50%) scale(${s})`}
addEventListener('resize',fit);fit();
const slides=[...document.querySelectorAll('.slide')];
let cur=-1,T0=performance.now();const hooks={},draws={};
function go(i){
  if(i<0||i>=slides.length||i===cur)return;
  if(slides[cur])slides[cur].classList.remove('active');
  slides[i].classList.add('active');cur=i;T0=performance.now();
  document.getElementById('ntt').textContent=`SLIDE ${i+1} / ${slides.length}`+(slides[i].dataset.who?` · ${slides[i].dataset.who}`:'');
  document.getElementById('ntx').textContent=NOTES[i]||'';
  if(hooks[slides[i].id])hooks[slides[i].id]();
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
