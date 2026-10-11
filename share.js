import {getLanguage,translate} from './i18n.js';

function rounded(c,x,y,w,h,r,fill){c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=fill;c.fill();}
function linesFor(c,text,maxWidth){
 const lines=[];
 for(const paragraph of String(text).split('\n')){
  let line='';
  const tokens=paragraph.match(/\s+|[A-Za-z0-9]+(?:['’\-][A-Za-z0-9]+)*|[^\s]/gu)||[''];
  for(const token of tokens){
   if(c.measureText(line+token).width>maxWidth&&line){lines.push(line.trimEnd());line=token.trimStart();}
   else line+=token;
  }
  lines.push(line.trimEnd());
 }
 return lines;
}
// Fit complete text inside a fixed region, wrapping at English word boundaries.
function textBox(c,text,x,y,w,h,{size=32,min=18,weight=400,maxLines=3,lineHeight=1.35,font}={}){
 let fitted=[],step=size;
 for(;step>=min;step--){
  c.font=`${weight} ${step}px ${font}`;fitted=linesFor(c,text,w);
  if(fitted.length<=maxLines&&fitted.length*step*lineHeight<=h&&fitted.every(line=>c.measureText(line).width<=w))break;
 }
 if(step<min){
  step=min;c.font=`${weight} ${step}px ${font}`;fitted=linesFor(c,text,w);
  while((fitted.length*step*lineHeight>h||fitted.some(line=>c.measureText(line).width>w))&&step>10){step--;c.font=`${weight} ${step}px ${font}`;fitted=linesFor(c,text,w);}
 }
 c.textBaseline='top';fitted.forEach((line,i)=>c.fillText(line,x,y+i*step*lineHeight));c.textBaseline='alphabetic';
 return {width:Math.max(...fitted.map(line=>c.measureText(line).width)),height:fitted.length*step*lineHeight};
}
export async function makeShareCanvas(t){
 const english=getLanguage()==='en';
 const copy={
  header:translate('鴻福堂 · HFT幫你了解自己'),read:translate('你嘅狀態已讀'),name:translate(t.name+'人格'),type:translate(t.type),
  status:translate('今日狀態')+(english?': ':'：')+translate(t.status),quote:translate(t.quote),signalLabel:translate('我嘅生活訊號'),signal:translate(t.signal),
  words:t.words.map(word=>translate(word)).join('  ·  '),
  share:translate('我嘅身體訊號係')+' '+translate(t.mode)+(english?', ':'，')+translate('你嘅呢？'),
  slogan:translate('HFTea 為你解開疑惑'),tags:english?'#HFTea  #KnowYourself  #HungFookTong':'#HFTea  #HFT幫你了解自己  #鴻福堂',
  disclaimer:translate('只供娛樂，唔構成醫療建議。品牌活動概念示範。')
 };
 if(document.fonts)await document.fonts.ready;
 const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1920;const c=canvas.getContext('2d');const font='"Noto Sans HK", "Microsoft JhengHei", sans-serif';
 const box=(text,x,y,w,h,options={})=>textBox(c,text,x,y,w,h,{font,...options});
 c.fillStyle='#fbfaf4';c.fillRect(0,0,1080,1920);rounded(c,55,55,970,1810,50,t.light);
 c.fillStyle='#115e59';box(copy.header,110,104,640,38,{size:28,min:18,weight:600,maxLines:1});c.font='24px Arial';c.fillText('MB “tea” I',785,130);
 c.strokeStyle='#115e5940';c.beginPath();c.moveTo(110,168);c.lineTo(970,168);c.stroke();
 const read=box(copy.read,110,218,775,48,{size:32,weight:500,maxLines:1});
 c.save();c.translate(126+read.width,220);c.strokeStyle='#115e59';c.lineWidth=3;c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(2,15);c.lineTo(10,23);c.lineTo(28,5);c.stroke();c.restore();
 box(copy.name,110,288,860,140,{size:98,min:42,weight:800,maxLines:2,lineHeight:1.12});box(copy.type,110,443,860,59,{size:46,min:29,weight:500,maxLines:1,lineHeight:1.2});
 rounded(c,110,508,860,77,38,'#ffffff90');c.fillStyle='#115e59';box(copy.status,142,530,796,44,{size:30,min:22,weight:500,maxLines:1});
 const img=new Image();img.src=t.character;await img.decode();const size=500,scale=Math.min(size/img.naturalWidth,size/img.naturalHeight),iw=img.naturalWidth*scale,ih=img.naturalHeight*scale;c.save();c.beginPath();c.roundRect(290,612,size,size,24);c.clip();c.fillStyle='#fff';c.fillRect(290,612,size,size);c.drawImage(img,540-iw/2,862-ih/2,iw,ih);c.restore();
 c.save();c.translate(865,1010);c.rotate(-.23);c.strokeStyle='#cb081c';c.fillStyle='#cb081c';c.lineWidth=4;c.beginPath();c.arc(0,0,87,0,Math.PI*2);c.stroke();c.lineWidth=1;c.beginPath();c.arc(0,0,77,0,Math.PI*2);c.stroke();c.textAlign='center';c.font=`700 ${english?46:53}px ${font}`;c.fillText(english?'Done':'已覆',0,18);c.font=`12px ${font}`;c.fillText(english?'SIGNAL RECEIVED':'訊號已接收',0,-43);c.fillText(english?'HAVE A TEA':'飲杯茶先',0,55);c.restore();
 c.fillStyle='#115e59';box(copy.quote,110,1140,860,166,{size:42,min:28,weight:700,maxLines:3,lineHeight:1.35});
 box(copy.signalLabel,110,1340,860,40,{size:23,weight:500,maxLines:1});box(copy.signal,110,1400,860,123,{size:29,min:24,maxLines:3,lineHeight:1.4});
 box(copy.words,110,1547,860,70,{size:26,min:19,weight:500,maxLines:2,lineHeight:1.3});c.strokeStyle='#115e5940';c.beginPath();c.moveTo(110,1630);c.lineTo(970,1630);c.stroke();
 box(copy.share,110,1658,860,58,{size:32,min:22,weight:600,maxLines:2,lineHeight:1.25});box(copy.slogan,110,1723,860,42,{size:32,min:23,weight:600,maxLines:1,lineHeight:1.2});
 box(copy.tags,110,1775,860,30,{size:22,min:17,maxLines:1,lineHeight:1.2});box(copy.disclaimer,110,1819,860,32,{size:18,min:13,maxLines:2,lineHeight:1.2});
 return canvas;
}
export async function downloadShare(t){const name=translate(t.name),error=translate('圖片未能建立');const canvas=await makeShareCanvas(t);const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error(error)),'image/png'));const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`MBTeaI-${name.replace(/[\\/:*?"<>|]/g,'-')}-1080x1920.png`;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);}
