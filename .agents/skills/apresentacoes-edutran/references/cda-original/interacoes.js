
(()=>{"use strict";
const doc=document.documentElement;doc.classList.add("js");
const deck=document.getElementById("deck");
const slides=[...deck.querySelectorAll(":scope > .s")];
const N=slides.length;
const RM=matchMedia("(prefers-reduced-motion: reduce)");
const nf=d=>new Intl.NumberFormat("pt-BR",{minimumFractionDigits:d,maximumFractionDigits:d});
const fmt=(v,d=0)=>nf(d).format(v);
const qs=(r,s)=>[...r.querySelectorAll(s)];
/* ---- escala ---- */
function fit(){const k=Math.min((innerWidth-16)/1920,(innerHeight-16)/1080);deck.style.setProperty("--k",Math.max(.1,k).toFixed(4))}
addEventListener("resize",fit);fit();
/* ---- montagem: topo, palavras, pontos, escala 0-10, matriz, barras, sparklines ---- */
slides.forEach((s,i)=>{
if(!s.hasAttribute("data-notop")){
const dark=s.dataset.theme;
const t=document.createElement("header");t.className="top";
t.innerHTML=`<span class="n">${String(i+1).padStart(2,"0")}</span><img src="a/${dark?"simbolo-branco":"simbolo-colorido"}.svg" alt="">`;
s.prepend(t);
}
});
qs(deck,"[data-m=words]").forEach(el=>{
let wi=0;const walk=n=>{[...n.childNodes].forEach(c=>{
if(c.nodeType===3){const parts=c.textContent.split(/(\s+)/);const f=document.createDocumentFragment();
parts.forEach(p=>{if(!p)return;if(/^\s+$/.test(p)){f.append(" ");return}const w=document.createElement("span");w.className="w";const x=document.createElement("i");x.textContent=p;x.style.setProperty("--wi",wi++);w.append(x);f.append(w)});
c.replaceWith(f)}else if(c.nodeType===1&&c.tagName!=="BR")walk(c)})};
walk(el);el.setAttribute("aria-label",el.textContent.replace(/\s+/g," ").trim());
});
qs(deck,".dots[data-n]").forEach(el=>{const n=+el.dataset.n,b=+el.dataset.d||0;for(let k=0;k<30;k++){const i=document.createElement("i");if(k<n){i.className="on";i.style.setProperty("--d",(b+k*40)+"ms")}el.append(i)}});
qs(deck,".scale10").forEach(el=>{for(let k=0;k<=10;k++){const s=document.createElement("span");s.textContent=k;s.setAttribute("data-m","pop");s.dataset.d=500+k*70;if(k>=8)s.className="hi";el.append(s)}});
qs(deck,"[data-mx]").forEach(el=>{
const cols=["Em dia","Perto do prazo","Passou do prazo","Sumido"],pal=[[15,61,38],[198,213,47],[160,18,52],[90,10,29]],mx=[402,151,120,64];
const rows=[["Manga",40,[310,142,120,64]],["Uva",30,[402,151,48,37]],["Cebola",60,[128,76,35,22]],["Tomate",45,[96,58,27,19]],["Melão",50,[54,31,14,9]]];
let h=`<span class="ch">Cultura · ciclo</span>`+cols.map(c=>`<span class="ch">${c}</span>`).join("");
rows.forEach(([c,cy,v],r)=>{h+=`<span class="rl"><b>${c}</b><span>volta a cada ${cy} dias</span></span>`;
v.forEach((n,k)=>{const a=.22+.78*n/mx[k],[R,G,B]=pal[k],light=k===1||a<.5,hot=r===0&&k===2;
h+=`<span class="cell${hot?" hot":""}" data-m="pop" data-d="${700+(r+k)*70}" style="background:rgba(${R},${G},${B},${a.toFixed(2)});color:${k===1?"#0F3D26":light?"#14201A":"#fff"}"><span data-count="${n}" data-d="${750+(r+k)*70}" data-dur="900">${n}</span></span>`})});
el.innerHTML=h;
});
qs(deck,"[data-bars]").forEach(el=>{const b=+el.dataset.d||0,items=el.dataset.bars.split(","),max=Math.max(...items.map(x=>+x.split(":")[1]));
el.innerHTML=items.map((x,k)=>{const[l,v]=x.split(":");return `<div class="bc${k===items.length-1?" cur":""}"><b><span data-count="${v}" data-d="${b+k*110+200}" data-dur="900">${v}</span></b><i class="bv" style="height:${Math.round(+v/max*170)}px" data-m="growY" data-d="${b+k*110}"></i><small>${l}</small></div>`}).join("")});
qs(deck,"[data-spark]").forEach(el=>{const b=+el.dataset.d||0,v=el.dataset.spark.split(",").map(Number),m=Math.max(...v);
el.innerHTML=v.map((x,k)=>`<i style="height:${Math.max(4,Math.round(x/m*40))}px" data-m="growY" data-d="${b+k*60}"></i>`).join("")});
/* ---- atrasos ---- */
slides.forEach(s=>{let auto=150;qs(s,"[data-m]").forEach(el=>{let d;if(el.dataset.d!=null)d=+el.dataset.d;else if(el.style.getPropertyValue("--d"))return;else{d=auto;auto+=80}el.style.setProperty("--d",d+"ms");el._d=d})});
/* ---- contadores ---- */
let token=0;
const isPriv=el=>{const p=el.closest(".pv");return p&&!p.closest(".priv").classList.contains("open")};
const mask=el=>{el.textContent=fmt(+el.dataset.count,+(el.dataset.dec||0)).replace(/\d/g,"0")};
function counterDelay(el){if(el.dataset.d!=null)return +el.dataset.d;const m=el.closest("[data-m]");return m&&m._d!=null?m._d+120:200}
function runCount(el,delay,tk){
const to=+el.dataset.count,dec=+(el.dataset.dec||0),from=el.dataset.from!=null?+el.dataset.from:0,dur=+(el.dataset.dur||1300);
if(RM.matches){el.textContent=fmt(to,dec);return}
el.textContent=fmt(from,dec);const t0=performance.now()+delay;
const step=t=>{if(tk!==token&&!el._own){el.textContent=fmt(to,dec);return}
let p=(t-t0)/dur;if(p<0){requestAnimationFrame(step);return}if(p>1)p=1;
const e=1-Math.pow(1-p,4);el.textContent=fmt(from+(to-from)*e,dec);if(p<1)requestAnimationFrame(step)};
requestAnimationFrame(step);
}
/* ---- valores protegidos ---- */
qs(deck,".priv").forEach(s=>{qs(s,".pv [data-count]").forEach(mask)});
function setPriv(s,open){
if(!s.classList.contains("priv"))return;
s.classList.toggle("open",open);
const b=s.querySelector("[data-eye]");if(b){b.setAttribute("aria-pressed",open);b.setAttribute("aria-label",open?"Ocultar valores":"Mostrar valores")}
qs(s,".pv [data-count]").forEach((el,k)=>{
if(open){const pv=el.closest(".pv");const pd=parseInt(getComputedStyle(pv).getPropertyValue("--pd"))||0;el._own=true;runCount(el,pd+(+(el.dataset.cd||0)),-1)}
else mask(el)});
}
deck.addEventListener("click",e=>{const b=e.target.closest("[data-eye]");if(b){e.stopPropagation();const s=b.closest(".s");setPriv(s,!s.classList.contains("open"))}});
/* ---- tocar slide ---- */
function play(s){
token++;const tk=token;
s.classList.remove("play");void s.offsetWidth;s.classList.add("play");
qs(s,"[data-count]").forEach(el=>{if(el.closest(".pv")){if(isPriv(el))mask(el);return}el._own=false;runCount(el,counterDelay(el),tk)});
}
/* ---- navegação e cortina ---- */
let cur=-1,busy=false,queued=null;
const curtain=document.getElementById("curtain"),strips=[...curtain.children];
const prog=document.getElementById("prog"),cnt=document.querySelector("#ui .cnt");
const MODES=["blinds","wipe"];
function show(i){
slides.forEach((s,k)=>{if(k!==i){s.classList.remove("on","play")}});
const s=slides[i];s.classList.add("on");cur=i;
prog.style.width=((i+1)/N*100)+"%";cnt.textContent=`${i+1} / ${N}`;
document.title=`${String(i+1).padStart(2,"0")} · ${s.dataset.title} · Central de Adubos`;
history.replaceState(null,"","#"+(i+1));
}
async function go(i,instant){
i=Math.max(0,Math.min(N-1,i));
if(i===cur)return;
if(busy){queued=i;return}
const fwd=i>cur;
if(instant||cur<0||RM.matches){show(i);play(slides[i]);return}
busy=true;
const t=slides[i].dataset.theme,color=t==="bd"?"#0F3D26":"#A01234",accent="#C6D52F";
const mode=MODES[i%MODES.length];
const order=k=>fwd?(strips.length-1-k):k;
strips.forEach((st,k)=>{st.style.background=(k===(fwd?0:strips.length-1))?accent:color});
const kf=(on)=>{
if(mode==="rows")return on?[{transform:"scale(1,0)"},{transform:"scale(1,1)"}]:[{transform:"scale(1,1)"},{transform:"scale(1,0)"}];
return on?[{transform:"scale(0,1)"},{transform:"scale(1,1)"}]:[{transform:"scale(1,1)"},{transform:"scale(0,1)"}];
};
const origin=(on,k)=>mode==="rows"?(k%2?"center bottom":"center top"):((on===fwd)?"right center":"left center");
const stag=mode==="wipe"?0:34;
const run=(on,dur)=>Promise.all(strips.map((st,k)=>{st.style.transformOrigin=origin(on,k);return st.animate(kf(on),{duration:dur,delay:order(k)*stag,easing:"cubic-bezier(.7,0,.3,1)",fill:"forwards"}).finished}));
try{
await run(true,380);
show(i);play(slides[i]);
await run(false,520);
}finally{
strips.forEach(st=>st.getAnimations().forEach(a=>a.cancel()));
busy=false;
if(queued!=null){const q=queued;queued=null;go(q)}
}
}
const next=()=>go((queued!=null?queued:cur)+1),prev=()=>go((queued!=null?queued:cur)-1);
/* ---- teclado / clique / toque ---- */
let typed="";
addEventListener("keydown",e=>{
if(e.metaKey||e.ctrlKey||e.altKey)return;
const ov=document.getElementById("ov").classList.contains("open");
const k=e.key;
if(ov){if(k==="Escape"||k==="g"||k==="G"){closeOv();e.preventDefault()}return}
if(/^[0-9]$/.test(k)){typed+=k;return}
if(k==="Enter"&&typed){go(+typed-1);typed="";e.preventDefault();return}
typed="";
if(["ArrowRight","PageDown"," ","Enter"].includes(k)){next();e.preventDefault()}
else if(["ArrowLeft","PageUp","Backspace"].includes(k)){prev();e.preventDefault()}
else if(k==="Home"){go(0)}else if(k==="End"){go(N-1)}
else if(k==="g"||k==="G"){openOv()}
else if(k==="f"||k==="F"){toggleFs()}
else if(k==="v"||k==="V"){const s=slides[cur];if(s.classList.contains("priv"))setPriv(s,!s.classList.contains("open"))}
});
deck.addEventListener("click",e=>{if(e.target.closest("button,a,[data-eye]"))return;if(getSelection().toString())return;(e.clientX<innerWidth*.25?prev:next)()});
let px=null,py=null;
addEventListener("pointerdown",e=>{if(e.pointerType!=="mouse"){px=e.clientX;py=e.clientY}},{passive:true});
addEventListener("pointerup",e=>{if(px==null)return;const dx=e.clientX-px,dy=e.clientY-py;px=null;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)){(dx<0?next:prev)()}},{passive:true});
/* ---- interface ---- */
const ui=document.getElementById("ui");let uiT;
const poke=()=>{ui.classList.add("show");clearTimeout(uiT);uiT=setTimeout(()=>ui.classList.remove("show"),2200)};
addEventListener("mousemove",poke,{passive:true});
ui.addEventListener("click",e=>{const a=e.target.closest("[data-act]");if(!a)return;e.stopPropagation();({prev,next,grid:openOv,fs:toggleFs})[a.dataset.act]()});
function toggleFs(){if(!document.fullscreenElement)doc.requestFullscreen?.().catch(()=>{});else document.exitFullscreen?.()}
const hint=document.getElementById("hint");setTimeout(()=>{hint.style.opacity=0},3800);
/* ---- visão geral ---- */
const ov=document.getElementById("ov"),grid=ov.querySelector(".grid");let built=false;
function openOv(){
if(!built){built=true;slides.forEach((s,i)=>{const th=document.createElement("button");th.className="th";th.setAttribute("aria-label",`Ir para o slide ${i+1}: ${s.dataset.title}`);
const c=s.cloneNode(true);c.classList.remove("s","on","play");c.classList.add("sx","static");c.removeAttribute("aria-label");
qs(c,"[data-eye]").forEach(b=>b.remove());
th.append(c);const lab=document.createElement("span");lab.textContent=`${i+1} · ${s.dataset.title}`;th.append(lab);
th.addEventListener("click",()=>{closeOv();go(i,true)});grid.append(th)});
const sc=()=>{const w=grid.querySelector(".th").getBoundingClientRect().width;qs(grid,".sx").forEach(x=>x.style.transform=`scale(${w/1920})`)};
requestAnimationFrame(sc);addEventListener("resize",sc)}
qs(grid,".th").forEach((t,k)=>t.classList.toggle("cur",k===cur));
ov.classList.add("open");grid.children[cur]?.scrollIntoView({block:"center"});grid.children[cur]?.focus();
}
function closeOv(){ov.classList.remove("open")}
ov.addEventListener("click",e=>{if(e.target===ov)closeOv()});
/* ---- início ---- */
const start=()=>{const h=parseInt(location.hash.slice(1));go(isNaN(h)?0:h-1,true)};
const imgs=qs(deck,"img").map(im=>im.decode?im.decode().catch(()=>{}):Promise.resolve());
Promise.race([Promise.all([document.fonts?document.fonts.ready:Promise.resolve(),...imgs]),new Promise(r=>setTimeout(r,2500))]).then(start);
addEventListener("hashchange",()=>{const h=parseInt(location.hash.slice(1));if(!isNaN(h)&&h-1!==cur)go(h-1)});
})();
