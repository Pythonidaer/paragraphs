const ink = '#24243b', cream = '#fff7e6', blue = '#4168a0', coral = '#c75464', yellow = '#ffcf69';
const group = (x,y,content,scale=1) => `<g transform="translate(${x} ${y}) scale(${scale} ${Math.abs(scale)})">${content}</g>`;
const rect = (x,y,w,h,fill,r=0) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}"/>`;
const oval = (x,y,rx,ry,fill) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}"/>`;
const path = (d,fill='none',stroke='none',w=4) => `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const word = (x,y,value,size=32,fill=ink) => `<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" font-weight="800" fill="${fill}">${value}</text>`;
const line = (d,color=ink,w=5) => path(d,'none',color,w);
const cloud = (x,y,s=1,fill='#fff8ea') => group(x,y,path('M-139 29Q-156 0-124-15Q-115-57-67-46Q-30-97 17-59Q61-74 84-35Q135-43 139-4Q167 14 129 35H-117Z',fill),s);
const heart = (x,y,s=1) => group(x,y,path('M0 12C-33-7-13-29 0-16C13-29 33-7 0 12Z',coral),s);
const mic = (x,y,s=1) => group(x,y,line('M0 6v144m-27 0h54','#39364a',7)+oval(0,0,12,19,'#464259')+line('M-8-6h16m-15 7h14','#b7acc5',2),s);
const shot = (x,y,rx,ry,content,tail='M-51 38q-8 12-14 9',fill=cream) =>
  oval(x,y,rx,ry,fill)+group(x,y,line(tail,fill,15))+content;
const floor = (color) => rect(0,367,960,173,color);
const bar = (color='#30223c') => rect(0,0,960,540,color)+floor('#39283c')+path('M100 363Q265 324 425 363V413H100Z','#53364b')+
  [110,240,370,500,630,760,890].map(x=>line(`M${x} 0v26`,'#976c80',2)+oval(x,33,11,8,'#e6ad69')).join('');

function face(x,y,{s=1,mood='sad',woman=false,skin='#e4a37f',hair=ink,longHair=false,beard=false,gaze=0,mustache=false,wavy=false,pompadour=false}={}) {
  const eyes = mood==='love' ? heart(-17,-1,.57)+heart(17,-1,.57) :
    mood==='shock' ? [-17,17].map(i=>oval(i,-2,11,14,cream)+oval(i+gaze,-1,4,6,ink)).join('') :
    line(mood.startsWith('laugh')?'M-29-2l9-7 7 8m26 0 7-8 9 7':mood==='flat'?'M-28-1h14m28 0h14':mood==='strained'?'M-25-6l14 5-14 5m50-10-14 5 14 5':['calm','nervous','sleep'].includes(mood)?'M-25-3q8 10 16 0m18 0q8 10 16 0':'M-22-3v4m44-4v4',ink,mood==='calm'?3:5);
  const mouth = {flat:'M-10 22h20',calm:'M-10 19q10 9 20 0',love:'M-14 17q13 17 28 0',sad:'M-11 23q11-8 22 0',angry:'M-16 25q16-17 32 0',tired:'M-10 24h20',strained:'M-15 25q15-13 30 0',sleep:'M-10 23q10-4 20 0',skeptic:'M-11 24l23-4',nervous:'M-17 17q17 25 34 0z',shock:''}[mood];
  const brows = {angry:'M-31-19l24 11m14 0 24-11',sad:'M-29-12l17-7m24 0 17 7',tired:'M-30 9q10 11 21 3m18 0q10 8 21-3m-57-29h10m30 0h11',shock:'M-29-24q11-8 21-2m16 0q11-6 21 2',strained:'M-29-18q8-7 18 2m22 0q10-9 18-2',skeptic:'M-31-13h24m13-9q13-11 24-1',sleep:'M-28-13l14-5m28 0 14 5'}[mood];
  return group(x,y,(longHair?path('M-50 89V-14Q-52-60 0-55Q54-58 52-9V93Q33 101 11 87Q-15 99-50 89Z',hair):woman?path('M-51 47V-14Q-51-57 0-56Q51-56 51-14V47Q25 35 0 48Q-25 35-51 47Z',hair):'')+
    oval(-40,4,8,11,skin)+oval(40,4,8,11,skin)+oval(0,0,39,44,skin)+
    (pompadour?path('M-39-6q-7-9-2-23q-19-18-6-32q12-11 35-9q46-6 55 23q6 12-4 35l-11-1 1-19q-22 18-68 10z','#292139')+line('M-40-52q39 10 62-5m-56 15q37 6 63-8','#584664',4):wavy?path('M-41-3Q-49-55 0-56Q48-55 41-3Q14-12 0-45Q-15-13-41-3Z','#886448')+
    line('M-31-16q0-20 23-29m18 1q19 11 22 27','#c5a46f',4):path('M-40-8Q-49-52 0-54Q42-58 41-10Q19-16 11-37Q-8-13-40-8Z',hair))+
    eyes+(mood==='strained'?line('M-27 9l10 3m-13 1 10 3m-12 1 10 3m49-11-10 3m13 1-10 3m12 1-10 3','#a36a62',1.8):'')+(beard?path('M-35 13q10 16 18 13l8-11 9 4 9-4 8 11q9 3 18-13q-5 35-35 39q-30-5-35-39z',hair)+path('M-19 13q12-8 19-2q8-6 19 2l-5 6-14-3-14 3z',hair):'')+(mustache?path('M-21 13q11-10 21-4q10-6 21 4l-9 5-12-4-12 4z',hair):'')+(mood==='nervous'?path('M44-28q17 20 1 23q-14-1-1-23','#72ccec'):'')+(brows?line(brows,ink,3):'')+(mood.startsWith('laugh')?path('M-19 12q21 5 39 0q-2 26-20 27q-17-1-19-27z',ink)+path('M-15 15q15 4 31 0l-3 6q-14 4-25 0z',cream)+(mood==='laughTears'?path('M-31 2q-16 1-14 10q4 7 14-10m62 0q16 1 14 10q-4 7-14-10','#8dd4ee'):''):(mouth?line(mouth,ink,3):oval(0,22,9,12,ink))),s);
}
function person(x,y,{s=1,mood='sad',woman=false,shirt=blue,pose='stand',skin,hair,longHair=false,beard=false,legsColor=ink,gaze=0,wavy=false,bust=false,wide=false,pompadour=false}={}) {
  const legs = pose==='chair'?'M-18 75l32 19v36h16m-14-55 30 17v32h16':pose==='sit'?'M-18 85l-56 19 33 19m59-38 56 19-33 19':'M-17 81l-9 55-15 8m58-63 9 55 15 8';
  const arms = {
    chair:'M-25 24l16 45 26 9m9-54 25 39 13 2', stand:'M-26 23l-22 56m74-56 22 56', sit:'M-26 25l-25 39-15 19m92-58 25 39 15 19',
    head:'M-26 24l-37 31 28-69m61 38 37 31-28-69',
    reach:'M-25 24l-18 49m68-49 80-16', point:'M-23 24l-15 43m63-43 20 27 12 40 3 12', chest:'M-25 24l-17 52m67-52 25 33-47-21',
    phoneFront:'M-25 24l-12 45m62-45 11 37',
    phone:'M-25 24l-12 45 49-35m13-10 11 37-24-27'
  }[pose];
  const waves = wavy ? path('M-48 49q-18-18-9-49q8-26 9-50q1-39 48-41q44 1 49 39q4 31 12 51q7 28-11 48q-12 10-26-5l-5-42h-42l-3 43q-12 11-22 6Z','#b79560')+
    line('M-40-41q-3 31-12 49q-5 17 3 25m88-77q4 33 12 49q7 19-2 30','#e1bf83',6) : '';
  return group(x,y,line(legs,legsColor,14)+waves+(wide?rect(-49,-1,98,95,shirt,30):rect(-37,-1,74,95,shirt,25))+
    line(arms,skin??'#e4a37f',13)+
    (bust?oval(-23,30,30,24,'#dc7682')+oval(23,30,30,24,'#dc7682'):'')+
    (pose==='phoneFront'?line('M-37 69L7 37M36 61L23 34',skin??'#e4a37f',13):'')+
    (pose==='phone'||pose==='phoneFront'?rect(5,13,19,34,ink,4):'')+
    face(0,-35,{mood,woman:woman&&!wavy,skin,hair,longHair,beard,gaze,wavy,pompadour}),s);
}
const hero = (x,y,options={}) => person(x,y,options);
const host = (x,y,options={}) => person(x,y,{woman:true,shirt:coral,...options});
const recurringWoman = (x,y,options={}) => host(x,y,{skin:'#dfa184',hair:'#b79560',wavy:true,bust:true,...options});
const phone = (x,y,s=1,content='') => group(x,y,rect(0,0,112,177,ink,16)+rect(7,8,98,161,'#fdf6ec',11)+rect(44,13,24,4,ink,2)+content,s);
const textLines = (x,y,n=4,color='#68758e',w=62) => Array.from({length:n},(_,i)=>rect(x,y+i*10,w-(i%3)*8,3,color,2)).join('');
const table = (fill='#a96c54') => path('M155 345H805L940 540H20Z',fill)+line('M137 375H823','#ffffff38',3);
const car = (x,y,s=1) => group(x,y,rect(-124,2,248,58,blue,19)+path('M-93 7l34-48h103L91 7Z',blue)+path('M-73 4l25-31h87L67 4Z','#94c9d9')+oval(-83,57,20,20,ink)+oval(82,57,20,20,ink),s);
const glow = (id,x,y,rx,ry,color) => `<defs><radialGradient id="${id}"><stop stop-color="${color}"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></radialGradient></defs>`+oval(x,y,rx,ry,`url(#${id})`);
const flame = (x,y,s=1) => group(x,y,path('M-49 0Q-73-38-43-81Q-46-44-23-44Q-37-96 3-128Q-5-79 29-63Q45-54 39-86Q78-34 54 0Z','#e65b48')+path('M-24 0Q-36-24-8-46Q-14-25 4-24Q16-48 11-65Q55-20 31 0Z','#ffbd60'),s);
const couple = (x,y,s=1,other=false) => group(x,y,recurringWoman(-67,0,{s:.83,mood:'calm',pose:'reach'})+
  hero(67,0,{s:-.83,mood:'calm',pose:'reach',shirt:other?'#55816b':blue,...(other?{skin:'#f5c7af',pompadour:true}:{})}),s);

const glove = (x,y,s=1) => group(x,y,path('M-23 17v-15q-13-3-12-17q1-13 14-12q0-22 22-25q28-3 31 20l-2 31-10 17v25h-44z','#c64651','#703043',4)+
  line('M-21-27q17-7 17 15m-16 30h40','#f18878',4)+rect(-20,23,38,13,'#a83546',4),s);
const punchingBag = (x,y) => group(x,y,line('M0-57l-22 42m22-42 22 42','#ccd0db',4)+
  rect(-24,-19,48,101,'#3c3449',17)+rect(-24,48,48,12,'#a05868')+line('M-14-3v41','#63556a',4));
const mask = (x,y,s=1) => group(x,y,path('M-76-47Q-68-84 0-76Q69-83 77-44L64 33Q30 77 0 85Q-35 78-66 31Z','#fffdf5',ink,4)+
  path('M-51-19q18-15 34 0q-16 11-34 0m68 0q16-15 34 0q-16 11-34 0',ink)+line('M-11 35q12 7 22 0',ink,3),s);
const demon = (x,y,s=1,fill='#985069') => group(x,y,path('M-32-12q-25-15-18-49q17 27 35 28m47 21q25-15 18-49q-17 27-35 28', '#e7bd87',ink,3)+
  path('M-42-13L-48 5l13 6q2 38 35 41q34-5 36-41l12-6-7-18q-6-29-41-29q-35 0-42 29Z',fill,ink,3)+
  path('M-31-14l24 10-22 6zm62 0L7-4 29 2z','#ffde82')+path('M-24 24q24-24 49 0l-10 16-15-9-14 8z',ink)+
  path('M-19 21l8 12 6-18m11 0 8 18 6-12',cream)+line('M-6 7l-7 6m19-6 7 6',ink,3),s);
const metalhead = (x,y,options={}) => person(x,y,{shirt:'#26242e',hair:'#9b744d',longHair:true,beard:true,mood:'skeptic',...options});
const recliner = (x,y) => group(x,y,path('M-90 69l-32-116q-7-25 18-29h31q23 0 29 26L-10 39h72v53H-90Z','#4c415d',ink,5)+
  rect(-90,42,168,45,'#685775',13)+rect(-90,82,145,20,'#4c415d',6)+line('M-69 100v15m108-15v15',ink,8));
const walkingProfile = (x,y,s=1,legs='#34384f',reach=false) => group(x,y,
  line('M-15 67l-20 38-31 21m80-59 17 38 31 13',legs,13)+rect(-28,-7,53,82,blue,18)+
  line(reach?'M6 17l54-8 53-55':'M-4 17l18 27 19-16','#e4a37f',12)+
  path('M-24-24q-21-47 11-60q34-12 47 24l13 17-12 5q0 25-24 23z','#e4a37f')+
  path('M-25-26q-23-29-9-48q28-31 60-10l9 16q-19 5-26-7q-8 29-34 49Z',ink)+(reach?line('M23-64l14 9-13 5m-5-20 15 4',ink,4)+path('M26-36q12-8 15 4l-5 8-11-5z',ink):line('M28-52v4',ink,4)),s);
const eggshell = (x,y,s=1) => group(x,y,path('M-21-4l9 5 7-11 8 9 8-9 12 8q-3 24-22 24q-20 0-22-26Z',cream,'#a68a8a',2),s);

const brokenHeart = (x,y,s=1) => group(x,y,heart(0,0)+line('M0-16l-5 8 8 5-5 9','#3f4867',3),s);

const dove = (x,y,s=1) => group(x,y,path('M-31 13l17-10q-13-10-15-28q19 3 34 21q6-12 17-8q4 2 5 7l10 3-12 4q-9 14-29 13l-20 7 7-10z','#fff9eb')+
  line('M-18-14Q-5-9 1 1','#d8c9bb',2)+oval(22,-6,1.6,1.6,ink),s);
