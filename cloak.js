var a='\x1b[91m[Parcoil Cloak]\x1b[0m',b={getFavicon(){const A=document.querySelectorAll('link[rel="icon"]');return A.length>0?A[0].href:null},setFavicon(_){const B=document.querySelectorAll('link[rel="icon"]');for(const c of B)c.href=_},getTitle(){return document.title},setTitle(C){document.title=C},setCloak(_a,_b){document.title=_a;const _c=document.querySelectorAll('link[rel="icon"]');for(const d of _c)d.href=_b;localStorage.setItem('cloakTitle',_a);localStorage.setItem('cloakFavicon',_b)},init(){let D=localStorage.getItem('cloakTitle');let _B=localStorage.getItem('cloakFavicon');if(!D||!_B){console.log(a,'Initializing cloak settings...');const _A=this.getFavicon();!D&&localStorage.setItem('cloakTitle',this.getTitle());if(!_B&&_A)localStorage.setItem('cloakFavicon',_A);D=localStorage.getItem('cloakTitle');_B=localStorage.getItem('cloakFavicon')}console.log(a,`Title: ${D} Favicon URL: ${_B}`)}};document.addEventListener('DOMContentLoaded',()=>{b.setFavicon(localStorage.getItem('cloakFavicon'));b.setTitle(localStorage.getItem('cloakTitle'));var e=document.getElementById('cloakSelect');e?.addEventListener('change',()=>{var E=e.value,aA=cloaks.find(aB=>aB.name===E);aA?(b.setCloak(aA.title,aA.icon),console.log(`Selected cloak title: ${aA.title}`)):(console.error(`Cloak '${E}' not found in cloaks array.`))})});b.init();
