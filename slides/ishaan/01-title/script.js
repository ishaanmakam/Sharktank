/* 1 title letters + jet with a vapor trail */
const ttl=document.getElementById('ttl');'Halcyon'.split('').forEach((c,i)=>{const s=document.createElement('span');s.textContent=c;s.style.setProperty('--i',i);ttl.appendChild(s)});
const trail=document.getElementById('trail'),jet=document.getElementById('jet');
hooks.t1=()=>{trail.style.transition='none';trail.style.strokeDashoffset=1;void trail.getBBox();setTimeout(()=>{trail.style.transition='stroke-dashoffset 3.2s cubic-bezier(.3,0,.3,1)';trail.style.strokeDashoffset=0},900)};
draws.t1=t=>{const L=trail.getTotalLength(),k=Math.min(1,Math.max(0,(t-.9)/3.2)),e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;const p=trail.getPointAtLength(e*L),p2=trail.getPointAtLength(Math.min(L,e*L+2));const a=Math.atan2(p2.y-p.y,p2.x-p.x)*180/Math.PI;jet.setAttribute('transform',`translate(${p.x} ${p.y}) rotate(${a})`);jet.style.opacity=k>0&&k<1?1:0};
