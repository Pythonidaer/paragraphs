const scenes = [];
function scene(title, excerpt, background, art) {
  scenes.push({ title, excerpt, background, art });
}

scene('Bury the hatchet', "Thanks for meeting up today. If possible, I would like to bury the hatchet and clear the air. To calm my nerves and for each of us to feel safe again.", '#83c9f4',
  oval(758,104,66,66,'#ffe18b')+cloud(258,133,.83)+cloud(621,90,.61)+cloud(853,190,.45)+
  path('M0 325Q232 246 475 328Q703 258 960 327V540H0Z','#83bd77')+
  path('M0 407Q216 338 466 409Q699 344 960 409V540H0Z','#6da86e')+
  oval(482,432,118,18,'#4b825c')+path('M414 421V292a68 68 0 0 1 136 0v129Z','#b2acba',ink,4)+
  path('M428 420V293a54 54 0 0 1 108 0v127Z','none','#d5cbd2',3)+word(482,315,'HATCHET',21)+
  hero(244,346,{pose:'sit',mood:'calm'})+recurringWoman(718,346,{pose:'sit',mood:'calm'}));

scene('Leaving boxing behind', "2025 was one of the worst years of my life. When I got laid off again, I decided to stop pursuing a boxing dream I had been going after for over 5 years. I remembered living in my car and how hard it was to find a job the previous time.", '#c8cadb',
  floor('#9ca3b8')+rect(118,193,386,230,'#774e59',6)+rect(135,209,351,46,'#edcd9c',5)+word(307,242,'BOXING GYM',26)+
  rect(165,278,120,145,'#44415a')+punchingBag(366,331)+glove(318,365,.45)+glove(414,367,-.46)+
  group(239,114,path('M-99 36Q-119 7-80-2Q-100-33-57-38Q-65-66-24-67Q25-64 11-102Q68-76 57-43Q104-39 79-8Q128 5 103 35Z','#8c5e49')+word(0,20,'2025',42,cream))+
  hero(453,316,{pose:'chest'})+
  shot(704,167,166,107,car(711,180,.87)+rect(660,148,33,19,cream,6)+rect(680,163,34,17,'#566e9c',7)+rect(688,160,10,9,'#e4a37f',4)+face(693,154,{s:.34,mood:'sleep'})+
  '<ellipse cx="724" cy="168" rx="12" ry="9" fill="none" stroke="#24243b" stroke-width="3"/>'+line('M713 168h22m-11 0v8',ink,2),'M-91 78l-30 27'));

scene('The burden at home', "The weight and fear of burdening my then-roommates changed me for the worse.", '#bbabb8',
  floor('#817688')+rect(404,92,145,292,'#735d70',7)+rect(418,106,117,278,'#997d88',4)+oval(518,278,5,5,yellow)+
  rect(37,286,234,109,'#5d5476',22)+rect(48,336,214,56,'#82769d',12)+rect(26,322,38,72,'#695d84',13)+rect(241,322,39,72,'#695d84',13)+line('M63 392v19m177-19v19',ink,7)+
  rect(681,195,244,140,ink,7)+rect(691,204,224,120,'#3e4a60',4)+path('M697 208h104l-104 88z','#52617b')+rect(787,335,29,24,ink)+rect(672,357,262,60,'#795961',8)+line('M683 385h239','#ad8587',3)+
  shot(473,142,267,117,hero(389,125,{s:.66,mood:'angry',pose:'point',longHair:true,skin:'#f5bc9e',shirt:'#191822'})+
  host(542,126,{s:-.65,mood:'angry',pose:'point',longHair:true,hair:'#15141c',shirt:'#ed4798',skin:'#f5bc9e'})+
  word(470,98,'$ $ $',25,'#51816a'),'M17 100l-12 26')+
  table()+hero(480,334,{s:1.15,pose:'head'}));

scene('A light in the room', "When I began focusing more on comedy, unfortunately my wires got crossed and I fell uncontrollably hard for you. Ridiculously hard.", '#30223c',
  bar()+path('M572 0H715L837 433H425Z','#ffe1a22b')+glow('stage-light',649,254,243,243,'#ffc971')+
  oval(645,418,208,30,'#7f5165')+path('M617 288q-110 4-74-95q39 88 91 64m32 30q110 4 74-95q-39 88-91 64',cream)+
  '<ellipse cx="647" cy="176" rx="36" ry="9" fill="none" stroke="#fff1a7" stroke-width="5"/>'+
  recurringWoman(646,280,{mood:'calm',pose:'reach'})+mic(560,264,.9)+rect(182,392,75,85,'#563d56',11)+line('M194 459v46m56-42v42','#6f536e',6)+
  hero(247,394,{s:.96,mood:'love',pose:'chair'})+rect(188,452,110,15,'#694d68',7)+
  [
    [102,367,.74,{woman:true,shirt:'#776295',skin:'#b77f69',hair:'#4d2f3d',mood:'laughTears'}],
    [388,397,.95,{shirt:'#667887',skin:'#d59777',hair:'#563a41',beard:true,mood:'laugh'}],
    [852,394,.68,{woman:true,shirt:'#995e79',skin:'#e5b59a',hair:'#a8724d',mood:'laugh'}],
    [778,457,.56,{shirt:'#5e7974',skin:'#96624e',mood:'laughTears'}]
  ].map(([x,y,s,details])=>rect(x-38,y+8,65,61,'#563d56',9)+person(x,y,{s,pose:'chair',...details})).join(''));

scene('Everything is not fine', "I always figured that worst-case scenario, you’d say no, and I’d come back after a few months. Obviously, things didn't turn out that way.", '#592a3c',
  floor('#6c3542')+[52,169,310,653,798,917].map((x,i)=>flame(x,475,1.5+(i%3)*.37)).join('')+
  table('#9d5149')+hero(476,350,{pose:'sit',mood:'tired'})+
  rect(322,170,320,59,cream,14)+path('M468 225l12 27 22-27',cream)+word(482,208,'everything is not fine',26));

scene('Masking', 'I am new to the concept of masking, but I think that’s what I did when we dated, and especially once you said you weren’t feeling it. I tried faking it and it backfired epicly.', '#7f7899',
  glow('mask-light',358,281,315,270,'#c4c0d6')+face(361,302,{s:3.4})+
  group(363,312,path('M-115-70Q-103-121 0-109Q104-121 117-65L96 48Q49 116 0 126Q-54 118-99 47Z','#fffdf5',ink,5)+
    path('M-76-28q25-23 51 0q-26 15-51 0m101 0q26-23 51 0q-24 15-51 0',ink)+line('M-18 48q18 9 36 0',ink,4))+
  shot(702,163,120,100,group(702,162,path('M-56-46Q0-71 56-46L47 21Q29 61 0 68Q-31 59-47 21Z','#e7e0d7',ink)+line('M-36-12l17-9m38 0 17 9m-49 43q13-13 26 0')+
    path('M-29 0q-14 19-4 25q14 3 4-25m58 0q-14 19-4 25q14 3 4-25','#599dd2')),'M-67 69l-23 17'));

scene('Cloud nine', "Dating you and doing comedy more were the only things going right in my life. I was on cloud 9.", '#92c9ee',
  cloud(216,123,.62)+cloud(785,116,.71)+cloud(478,394,2.0)+couple(447,242,1.13)+mic(667,242,.85)+word(478,444,'9',55,'#5d7ba2'));

scene('A sleepless night', 'But the pain of rejection became too overwhelming. I couldn’t sleep, couldn’t stop thinking about you. Think of it like a hyperfixation. When they’re good, they’re great. When they’re bad, they’re the worst.', '#252840',
  oval(142,128,49,49,'#f8d98a')+oval(161,108,48,47,'#252840')+floor('#36304a')+
  rect(134,361,468,105,'#554b73',17)+rect(149,332,100,57,'#c6bad4',20)+path('M224 355q50-12 113 21l-19 33-87-14z','#7f6e92')+
  path('M274 369Q348 337 404 363Q510 330 581 374V431H252Z',blue)+
  line('M263 377q20 18 56 7','#e4a37f',10)+ '<g transform="rotate(-24 218 355)">'+face(218,355,{mood:'strained',s:.77})+'</g>' +
  shot(565,171,291,137,couple(550,139,.66,true)+line('M499 88l106 119m0-119-106 119',coral,4)+
    demon(334,129,.67)+demon(401,171,.48,'#625b88')+demon(723,128,.59,'#626b8e')+demon(787,165,.51)+
    word(437,259,'MONEY',17)+word(563,259,'HOPE',17)+word(694,259,'DOPAMINE',17)+
    line('M397 251h79m57 0h61m51 0h101',coral,4),'M-182 108l-51 29'));

scene('Walking past', "It’s why I couldn’t even look at you and began avoiding you. I never wanted to slight you, and apologize if it came off that way.", '#402b37',
  bar('#442b37')+rect(683,106,161,325,'#b27957',10)+rect(696,123,135,308,'#231f33',4)+
  word(762,162,'TIPSY',28,yellow)+path('M99 125l13-32q4-12 15-7l4 3q6 5 12 0q12-10 17 4l11 34z','#d4a06d', '#a87556',3)+
  path('M101 116q31 10 68 1l3 11q-37 13-74 0z','#744b4a')+
  path('M72 116q10 16 36 15h53q24 0 38-15q-3 30-28 34H100q-24-5-28-34z','#d4a06d','#a87556',3)+
  recurringWoman(355,323,{mood:'shock',gaze:5})+
  walkingProfile(588,326)+shot(363,170,78,39,word(364,180,'WTF?',29),'M14 32l-8 25'));

scene('The stove and the coal', "Imagine burning your hand on a hot stove. If right after you tried to grab a burning coal, it would hurt even more than usual. That’s the best way to describe how I felt. I just didn't know how to escape or endure the pain I was experiencing with all that I had going on. It physically hurt to look your way.", '#171621',
  path('M18 246Q440-65 942 246Q487 551 18 246Z',cream,ink,7)+oval(480,240,185,174,'#678aa5')+
  oval(480,240,146,132,'#292739')+
  '<clipPath id="pupil-cut"><ellipse cx="480" cy="240" rx="146" ry="132"/></clipPath>'+
  '<g clip-path="url(#pupil-cut)">'+rect(484,228,105,105,'#7a8190',6)+rect(478,226,115,12,'#bac3cb',4)+
  rect(491,257,91,64,'#555c6b',5)+rect(503,268,68,40,'#313948',5)+line('M510 265h52','#d7dce1',3)+
  [499,522,548,574].map(x=>oval(x,245,4,4,cream)).join('')+flame(538,228,.58)+
  walkingProfile(419,240,.91,'#b4b8d0',true)+'</g>'+
  path('M751 315Q742 344 721 385Q690 446 736 459Q786 469 783 426Q782 385 751 315Z','#80c8ed','#578faa',4));

scene('Running on empty', "My heart, my nerves, my mind, my anxiety, depression, weeks away from unemployment with no job in sight. I was at my limit.", '#827c95',
  glow('portrait-light',480,245,365,279,'#c8b2c1')+
  path('M140 540Q179 393 480 374Q779 393 820 540Z',blue)+
  face(480,300,{s:2.42,mood:'strained'})+brokenHeart(480,467,2.2)+
  path('M340 150a140 117 0 0 1 280 0','none','#56506a',15)+
  path('M340 150a140 117 0 0 1 22-64','none','#b84d60',15)+
  line('M480 150l-118-16',ink,7)+path('M348 132l25-6-4 16z',ink)+oval(480,150,11,11,ink)+
  word(320,161,'E',29)+word(640,161,'F',29)+line('M480 37v17m-81 6 10 14m151-14-10 14',cream,4));

scene('Breaking down', 'I was breaking down and trying to fight my way through it, but I failed. I broke down.', '#343047',
  '<g class="spin">'+[150,178,206,240,265].map((r,i)=>`<circle cx="480" cy="270" r="${r}" fill="none" stroke="${i%2?'#7886a2':'#5e557c'}" stroke-width="13"/>`).join('')+
  face(480,68,{s:.68,mood:'love'})+demon(623,116,.62)+glove(685,271,.66)+mic(626,383,.49)+
  group(279,268,rect(-36,-21,72,42,'#89ab82',5)+word(0,12,'$',29,'#344f54'))+
  brokenHeart(478,475,1.4)+
  line('M315 155q12-20 25 0t27 0m-41 253q14-22 28 0t27-3','#e6b3a7',5)+
  path('M548 441l8 17 20 5-20 6-8 20-8-20-19-6 19-5z',yellow)+oval(650,333,8,8,'#d79b8f')+'</g>'+
  oval(479,430,75,12,'#282538')+hero(480,290,{s:.97,mood:'strained'}));

scene('Overheard at the mic', "One night in June or July I went to OffCabot for the open mic and overheard somebody mention you were officially dating someone. IDK what medical stuff I have, but let’s just say I went manic. If a needle existed with the worst feeling possible, it was injected inside of me in that moment.", '#33314c',
  oval(139,64,42,42,'#ebc177')+[31,66,112,203,230].map((x,i)=>oval(x,27+(i*29)%102,2+i%2,2+i%2,'#e8dcba')).join('')+rect(251,53,709,357,'#684e5e')+
  [127,165,203,241,279,317,355].map(y=>line(`M255 ${y}H960`,'#815f6b',3)).join('')+
  rect(409,188,145,222,'#352a3e',7)+rect(423,239,116,149,'#463851',5)+oval(520,325,4,4,yellow)+
  word(481,224,'OFFCABOT',22,'#f2ba7b')+floor('#625568')+rect(0,398,960,17,'#837184')+
  hero(289,343,{s:1.14,mood:'shock',pose:'chest'})+
  metalhead(623,324,{s:.78,pose:'reach'})+
  person(789,333,{s:-.78,mood:'calm',skin:'#c98266',shirt:'#548071'})+
  shot(704,145,150,94,couple(704,128,.66,true),'M-57 68l-27 32'));

scene('Blocked', "I went on IG and impulsively blocked every comic. I couldn’t settle down. The next day, clearly I regretted my decision. I unblocked everybody, but I didn’t re-follow or explain.", '#a34f5c',
  Array.from({length:12},(_,i)=>{
    const x=i<6?144+(i%3)*91:571+(i%3)*88;
    const y=67+Math.floor((i%6)/3)*158+(i%3)*20;
    return phone(x,y,.48+(i%3)*.10,oval(56,69,25,25,'#f6c3bd')+line('M40 84l31-31',coral,5)+word(56,125,'BLOCKED',19,coral));
  }).join('')+hero(487,342,{s:1.46,mood:'angry',pose:'head'}));

const split = () => path('M0 0H960V540Z','#b58aa0')+line('M0 0L960 540','#f1cda6',5);
scene('A confusing text', "I only reached out to Nathan and Chris because they had already known we very briefly had a fling. I wasn’t clear or wise when I messaged Leedham. I had only wanted to let him know I still considered him a friend, even though I couldn’t go to comedy anymore. I was just trying to protect myself from making any more foolish decisions or torturing myself more.", '#8795ad',
  split()+recliner(257,390)+hero(247,362,{s:1.04,pose:'phone'})+
  metalhead(774,218,{s:1.09,pose:'phone'})+
  shot(785,82,76,38,word(786,92,'Huh?',30),'M-18 29l-12 19'));

const metalheadFace = {mood:'skeptic',hair:'#9b744d',longHair:true,beard:true};
const mustachedFace = {mood:'calm',skin:'#efb89e',mustache:true};

scene('“I told everyone”', "That’s when you reached out, understandably, and when you said, “I told everyone,” that hurt because I didn’t feel that was accurate. I just wanted to acknowledge that here while still holding myself accountable.", '#b9999c',
  floor('#8f6e82')+hero(298,384,{s:1.03})+recurringWoman(668,383,{s:-1.06,pose:'reach',mood:'angry'})+
  shot(652,159,278,119,Array.from({length:16},(_,i)=>{
    const x = 448+(i%8)*57;
    const y = 124+Math.floor(i/8)*69;
    if (i===1) return face(x,y,{...metalheadFace,s:.49});
    if (i===2) return face(x,y,{...mustachedFace,s:.55});
    return face(x,y,{
      s:.49+(i%3)*.06,mood:i%2?'calm':'shock',woman:i%3===0,
      skin:['#8f5d47','#ebbb93','#ad7959','#d6977c','#624938'][i%5],hair:['#48354c','#a19b9c','#332a3c','#ad7044'][i%4]
    });
  }).join(''),'M54 106l-15 29')+
  shot(179,191,130,70,face(225,182,{...mustachedFace,s:.74})+
  face(130,181,{...metalheadFace,s:.71}),'M71 49l27 23'));

scene('A wall of texts', "I also want to apologize for the paragraphs—another concept I am new to is attachment styles. In the least, I feel partial to anxious attachment. Trying to resolve things immediately is a common trait for anxious attachment I've read... through text novels specifically.\n\nI didn’t understand this about myself at the time, and acknowledge that texting was the worst medium possible. I imploded.", '#8795ad',
  split()+recliner(270,390)+hero(267,362,{s:1.04,pose:'phone',mood:'tired'})+
  recurringWoman(691,212,{s:.88,mood:'shock',pose:'reach'})+
  phone(802,188,1.02,textLines(20,39,11))+shot(758,79,77,36,word(759,90,'Yikes',30),'M-41 27l-19 13'));

scene('Eggshells at the show', 'I just felt uncomfortable asking for your company in person.\n\nIIRC, you shared those paragraphs with other people.\n\nFast forward to Nov–Dec, when you said I could come back (thank you), I felt like I was walking on eggshells, which is why when you bumped me for NYC comics at Super Slice, I just said “sure.”\n\nTo you, it came off as snarky, but I was just auto-correcting from multiple paragraphs.', '#e4cdb4',
  rect(0,0,960,540,'#e4cdb4')+path('M0 382H960V540H0Z','#bf9270')+
  [76,193,669,798].map(x=>rect(x,101,103,257,'#363341',5)+rect(x+7,109,89,236,'#94baca',4)+
  line(`M${x+9} 185h84m-42 0v153`,'#494659',5)).join('')+
  rect(42,285,278,106,'#eecdc0',5)+[0,1,2,3,4,5,6,7,8].map(i=>rect(46+i*30,295,15,85,'#bb655c')+rect(46+i*30,312,28,15,'#a6484e55')+rect(46+i*30,353,28,15,'#a6484e55')).join('')+
  rect(26,273,303,22,'#79544c',4)+rect(347,91,256,48,'#bd4752',5)+word(475,124,'SUPER SLICE',28,cream)+
  mic(843,323,.68)+
  person(705,302,{s:.83,skin:'#744833',shirt:'#252632',mood:'calm'})+
  path('M673 267q-1-42 34-40q29 2 33 24l-66 10z','#fff7e6')+
  path('M671 258q29-12 65-5q-23 8-65 13z','#2f3445')+oval(692,271,11,7,'#d5a24e')+oval(719,271,11,7,'#d5a24e')+line('M703 271h5',ink,2)+
  person(778,321,{s:.79,skin:'#57372c',shirt:'#d33d55',mood:'skeptic',wide:true})+
  path('M752 327l18-10 8 9 9-9 18 10-18 9-9-6-9 6z','#fff7e6')+
  person(903,330,{s:.70,skin:'#d7a286',shirt:'#635b86',mood:'flat'})+
  recurringWoman(388,319,{pose:'reach',mood:'calm'})+hero(592,320,{s:-1,mood:'tired'})+
  shot(609,177,76,33,word(609,186,'sure',26),'M-15 27l-12 17')+
  group(151,262,`<g transform="scale(1 .42)">${oval(0,0,77,77,'#bfc6cc')}${[0,72,144,216,288].map((angle,i)=>
    `<g transform="rotate(${angle})">${path('M0-7l-36-48q35-29 72 0z',['#e1ad65','#be6751','#e5b76f','#b98758','#dda96b'][i],'#8b593f',5)}${oval(-10,-43,6,6,i%2?'#823a46':'#72846b')}${oval(12,-52,7,7,i%2?'#e2bc83':'#b25a52')}</g>`
  ).join('')}</g>`));

scene('Butter and pizza', 'Then when a duplicate butterscannon handle got removed from the Bada Bing chat, I added a butter emoji. No drama, just the same thing I’d do with a pizza emoji for Super Slice.\n\nAfter you reached out about that and asked for no drama, the next day I noticed you had unfollowed me.', '#a49ab2',
  floor('#827790')+hero(220,317,{s:1.22,pose:'chest'})+recurringWoman(746,323,{s:-1.2,pose:'reach',mood:'sad'})+
  shot(515,172,151,116,group(174,44,rect(400,63,242,220,ink,16)+rect(409,72,224,200,'#f9efe5',12)+
  rect(409,72,224,31,'#615676',9)+word(521,94,'Group chat',16,cream)+
  rect(535,114,82,57,'#d4e6d9',12)+rect(556,137,38,17,'#e9ab4f',4)+rect(560,129,33,13,'#ffda78',4)+
  rect(535,181,82,68,'#d4e6d9',12)+path('M552 198q23-13 46 1l-20 33z','#f5b659','#a85c4e',4)+
  oval(574,205,4,4,coral)+oval(583,213,4,4,coral)+word(519,308,'no drama thx',24),.66),'M116 64l61 31'));

scene('“Our energy was whack”', "That’s when I wanted to give you an out, because as much as it would suck, it would have been understandable if you had wished you hadn’t or regretted inviting me back.\n\nI felt like a punching bag from what felt like criticisms over a response or an emoji.\n\nIt was hard to get a read on you, which is why I asked.\n\nThat’s when I had said our energy was whack. I simply meant things between us didn't feel all good. It felt like issues weren’t squashed, but it was unclear. Things felt rocky between us, is all I was saying.\n\nI didn’t say “your energy is whack,” but you told me to fuck off as if I did.", '#bbb9d1',
  path('M0 0L960 540H0Z','#b4ae4c')+path('M0 0H960V540Z','#b58aa0')+
  '<clipPath id="bathroom-half"><path d="M0 0L960 540H0Z"/></clipPath><g clip-path="url(#bathroom-half)">'+
  oval(308,500,183,92,'#faf3df')+oval(308,492,130,60,'#aaaeb0')+
  oval(308,499,106,46,'#768d96')+line('M252 510q58 25 113-1','#b2dad8',5)+
  path('M117 540Q77 449 145 380Q180 343 207 372Q224 389 209 443L192 477 208 540Z','#d29a79')+
  path('M369 540l16-63q-31-65-2-98q31-39 72 14q29 44 30 147Z','#d29a79')+
  '<g transform="translate(0 -28)">'+
  path('M160 372l51 5 14 24q65 31 151 2l18-22 53 5-4 34q-19 21-52 8-91 39-185-2-34 11-58-13z','#39445d',ink,3)+
  line('M157 399q27 11 55-2m173 3q27 10 56-1m-176 29 48 1','#75829a',4)+
  path('M161 387l3-35q5-20 28-22q22 3 25 23l-4 34q-20 11-52 0zm226 6 4-36q7-20 30-19q22 4 24 25l-8 30q-23 9-50 0z','#292938','#e3ddcd',3)+
  line('M173 357l31 2m-31 6 29 2m198-4 32 4m-34 4 31 4','#e3ddcd',3)+'</g>'+
  line('M64 540q37-70 97-95q58-25 83-91','#d29a79',32)+
  phone(220,305,.87,rect(14,50,84,49,'#f8f0da',10)+word(56,79,'our energy',13))+'</g>'+
  line('M0 0L960 540','#f1cda6',5)+
  recurringWoman(752,225,{s:-1.02,mood:'angry',pose:'phoneFront'})+
  shot(741,91,131,54,word(742,86,'My energy?',23)+word(742,115,'fuck off!',23),'M12 43l-4 18','#f6d0c9'));

scene('April and a new job', "When we next spoke in April, you still remembered that perceived slight. But you still went after me when I was leaving Super Slice to come back, and I did (thank you).\n\nWhen I got hired at Witch Village, I was weeks away from living in my car again. This was my only job in sight. The managers asked me if I knew you, and I played dumb as not to bring my personal life into a professional workplace, let alone an interview.\n\nNor did I want to tarnish your name, especially at a place you frequented and did comedy at.", '#b1bacf',
  floor('#8e7d8b')+rect(318,52,425,99,'#63546e',8)+word(530,112,'WITCH VILLAGE',37,yellow)+
  host(446,274,{mood:'calm',skin:'#ba785e',longHair:true,shirt:'#302c3d'})+oval(430,300,16,13,'#403747')+oval(462,300,16,13,'#403747')+
  host(645,269,{mood:'calm',skin:'#edba9e',hair:'#c7a46d',longHair:true,shirt:'#658a8c'})+
  rect(615,231,25,13,'none',4)+path('M610 224h29v17h-29zM651 224h29v17h-29zM639 230h12','none',ink,4)+
  path('M324 304H751L803 418H268Z','#a77564')+line('M304 383h463','#744e51',4)+
  rect(489,333,92,33,cream,3)+textLines(499,342,2)+
  rect(420,396,117,105,blue,31)+oval(478,367,48,55,ink)+oval(431,373,8,12,'#e4a37f')+oval(525,373,8,12,'#e4a37f')+
  rect(416,446,124,68,'#645568',14));

scene('What got back to me', "A co-worker who shall remain nameless said the managers asked you if you knew me, and told me you said we dated for three weeks and that I was crazy. Ouch!\n\nKeep in mind, this was just weeks after you told me saying “your energy is whack” is offensive to somebody with bipolar, when I didn’t even use that phrase. I was upset.\n\nYou gotta know, I used to work at Life Alive, so to me, energy in that regard is vibes, feeling. It was about the dynamic between us, and that’s it. I'll own up to anything I did for sure. I just gotta stand my ground on stuff I didn't do.", '#96879d',
  floor('#746680')+hero(315,356,{mood:'shock',pose:'chest'})+
  [632,642,654,706,719,730].map((x,i)=>line(`M${x} 243q${i%2?10:-9} 53 -1 127`,'#3c2b35',9)).join('')+
  person(681,316,{mood:'tired',shirt:'#426d51',skin:'#83523d',s:-1.12,pose:'reach'})+
  line('M652 337q29 15 58 0','#d6ac51',8)+line('M650 353q31 15 62 0','#a84551',8)+
  line('M653 369q29 15 58 0','#7c9a5c',8)+line('M658 386q24 12 48 0','#d6ac51',7)+
  path('M636 251q9-51 47-51q37 0 49 51z','#51474b')+
  line('M647 221q35-16 74 0','#9a6159',6)+line('M642 232q40-12 84 0','#d7a763',6)+line('M638 243q47-10 92 0','#67846a',6)+
  shot(589,135,190,52,word(589,144,'She said you crazy bro',27),'M91 41l17 25','#efcac4'));

scene('Mics, shows, and bills', "I didn’t say anything to you about it. I kept doing mics. We were cool enough.\n\nBut for some reason, once you asked if I wanted to do mics or shows, I said no. I’m in financial ruin, so I’ve got other reasons I need to deprioritize comedy.\n\nBut also, I was masking again. I was afraid to confront you over it, but for some reason, mics were okay. I just didn’t want to do shows with somebody who I felt did me wrong like that. I didn't want to make things worse, but how things were kept eating up at me. I'm sorry.", '#594960',
  glow('second-mask',480,308,345,261,'#ac90aa')+
  path('M279 540Q322 408 480 400Q640 408 683 540Z',blue)+face(480,347,{s:2.37})+mask(480,343,1.32)+
  shot(486,139,323,104,word(431,123,'you said I was crazy?!?',28)+
  face(323,177,{s:.58,mood:'sad'})+path('M306 175q-11 17-2 22q11-3 2-22m32 0q-11 17-2 22q11-3 2-22','#64b6e4')+
  path('M551 154q29-23 45-11q28-16 54 2q31 24-4 41q-29 16-61 5q-60 0-34-37Z','#fffdf6')+
  oval(614,168,20,17,yellow)+eggshell(549,194,.62)+eggshell(675,179,.66),'M32 85l-16 30'));

scene('Saying yes anyway', "I still gotta own up to being confusing with saying yes to Ethan when he asked about the Cannery show. I didn’t know what he knew about us, so I said yes. I also thought if other people were booking WCC, I could eat my cake and have it too. That was foolish. I made a mistake. My bad.", '#bc938d',
  rect(0,0,960,540,'#554359')+floor('#795967')+
  rect(47,76,486,208,'#27283e',8)+word(288,130,'Myyy Baaad',35,'#c0ab9e')+
  [169,221].map(y=>line(`M61 ${y}h451`,'#8d685d',6)+Array.from({length:12},(_,i)=>rect(73+i*36,y-26,14,23,['#a88569','#496d72','#7c596a'][i%3],3)+rect(77+i*36,y-32,6,8,'#aaa489',2)).join('')).join('')+
  rect(15,270,540,25,'#966d59',5)+rect(28,295,511,75,'#423349')+
  rect(642,105,171,306,'#342b3f',7)+rect(657,119,138,292,'#242433',7)+
  path('M661 130l104 23v231l-104 22Z','#8b626b')+oval(748,264,5,6,yellow)+
  oval(132,412,77,16,'#ad8570')+line('M132 423v67m-32 0h64','#493647',8)+
  line('M280 326v122m71-35v35m-76-39h96',' #2d2637'.trim(),9)+rect(274,394,93,19,'#7f5f70',5)+
  group(325,356,rect(-29,-10,58,59,blue,19)+line('M9 39l45 6v42h19m-45-39 43 1v30h14',ink,11)+
    line('M13 4l14 28 24 5','#e4a37f',10)+face(2,-37,{s:.87,mood:'nervous',gaze:5}))+
  person(785,378,{s:.38,shirt:'#5d796a',mood:'calm'})+
  shot(373,227,119,36,word(373,234,'why yes, good sir!',19),'M-30 32l-12 20')+
  shot(775,303,134,28,word(775,309,'Wanna do the Cannery?',17),'M10 21l3 18'));

scene('Room to talk', "But to be able to talk to you clearly today means a hell of a lot, because I never wanted any of this to go down. I don’t think I could help having such strong feelings for you. I wish I regulated my emotions better, chose my words more wisely, acted and behaved differently.\n\nBut all I really wish for now is for there to be room—for space—to not have to be perfect. To not have to be nervous or feel unsafe or afraid with expressing or communicating with one another.\n\nTo me, that feeling is as valuable as love or wealth or bringing the house down with laughter.", '#e8cfad',
  oval(734,128,69,69,'#ffcf78')+cloud(272,204,.75)+path('M0 378Q237 283 476 379Q681 316 960 368V540H0Z','#99b697')+
  hero(260,337,{pose:'sit',mood:'calm'})+recurringWoman(700,337,{pose:'sit',mood:'calm'})+
  dove(408,135,.73)+dove(479,102,.9)+dove(550,143,.66)+dove(607,87,.51));

scene('A reset', "Also, this has been an emotional earworm from hell for me since last year. Every day. So even if you don’t want to keep in touch or talk after this, I hope we can reset our dynamic and be cool. This means a lot to me that you would give me this time. I'm embarrassed to say this but it's been devastating for me.\n\nMaybe I would have been able to get over this easier if I had options, a job, the means to travel or go to therapy or something. I was hurt so bad last year that just remembering you call me Jonathan made me start going by Johnny, just so I could try to at least escape the pain somehow. I'm not blaming you though. My emotions are my responsibility. I'm grateful that you let me express how I have been feeling for so long.\n\nPlease feel free to share your thoughts. I'm here.", '#a2cde0',
  oval(510,199,58,58,'#ffdd87')+cloud(111,58,.61)+cloud(748,116,.47)+
  path('M0 355Q209 309 472 375Q723 319 960 357V540H0Z','#87ac8b')+
  path('M464 371Q448 404 365 540H611Q524 432 492 373Z','#f3d8b0')+
  hero(480,352,{s:.73,mood:'calm'})+
  oval(300,184,136,56,cream)+word(300,180,'I still need a job',22)+word(300,207,'so f@!#ing bad',22)+
  oval(410,240,12,8,cream)+oval(450,269,6,5,cream)+path('M274 296q22-17 36 0q15-18 31 0m276-36q15-10 26 0q10-13 25-2','none','#51667a',4));
