function frame(now){const t=(now-T0)/1000,id=slides[cur]&&slides[cur].id;if(draws[id])draws[id](t);requestAnimationFrame(frame)}
requestAnimationFrame(frame);
go(Math.max(0,Math.min(slides.length-1,(parseInt((location.hash.match(/^#s(\d+)$/)||[])[1])||1)-1)));
