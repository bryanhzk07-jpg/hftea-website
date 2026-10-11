export const order=['廿四味','五花茶','竹蔗茅根','夏枯草'];
export const teas={
 '廿四味':{short:'廿',name:'廿四味',character:'/hftea-website/assets/characters/24.png',characterAlt:'廿四味茶人格 IP 形象與飲品',type:'燥熱行動派',status:'高負載運行中',mode:'燥熱 Mode',color:'#d6373e',light:'#f7dddd',signal:'燥熱、想爆、口乾、爆痘、喉嚨乾',life:'追巴士、趕 deadline、主導會議、搞氣氛',words:['直接','有火','行動快','講義氣'],quote:'趕呀！衝呀！——但，飲杯涼茶先。',caption:'行先一步，都記得停一停。',icon:'arrow-up-right',product:'廿四味',fact:'產品資料整理中',url:'https://www.hungfooktong.com/'},
 '五花茶':{short:'五',name:'五花茶',character:'/hftea-website/assets/characters/five-flower.png',characterAlt:'五花茶茶人格 IP 形象與飲品',type:'濕重平衡型',status:'後台程式太多',mode:'濕重 Mode',color:'#517650',light:'#e3ebd5',signal:'濕重、肚脹、個人重、冇胃口',life:'照顧人、抄筆記、慢慢消化、外賣網購',words:['溫和','穩定','識照顧人','唔搶風頭'],quote:'唔急，慢慢嚟，飲杯茶先。',caption:'照顧大家，亦要照顧自己。',icon:'asterisk',product:'五花茶',fact:'產品資料整理中',url:'https://www.hungfooktong.com/'},
 '竹蔗茅根':{short:'竹',name:'竹蔗茅根',character:'/hftea-website/assets/characters/sugar-cane.png',characterAlt:'竹蔗茅根茶人格 IP 形象與飲品',type:'乾燥治癒型',status:'飛行模式',mode:'乾燥 Mode',color:'#4f849a',light:'#dcecf3',signal:'口乾、皮膚乾、想放空、需要 Me Time',life:'聽歌、望窗外、角落觀察、靜音',words:['溫柔','敏感','慢熱','清甜'],quote:'好想飲杯茶，靜一靜……',caption:'將世界靜音，聽一聽自己。',icon:'wave',product:'竹蔗茅根',fact:'產品資料整理中',url:'https://www.hungfooktong.com/'},
 '夏枯草':{short:'夏',name:'夏枯草',character:'/hftea-website/assets/characters/prunella.png',characterAlt:'夏枯草茶人格 IP 形象與飲品',type:'熬夜深度型',status:'電量 20%',mode:'熬夜 Mode',color:'#c17545',light:'#f9e7b2',signal:'眼乾、肩頸硬、熬夜、靈魂出竅',life:'凌晨活躍、閉目養神、諗太多、最後交到貨',words:['深思','夜貓','外冷內熱','有責任感'],quote:'唔係唔覆，飲杯茶先，聽日先算。',caption:'夜深仲 online，係時候充電。',icon:'moon',product:'夏枯草',fact:'產品資料整理中',url:'https://www.hungfooktong.com/'}
};
const q=(text,options)=>({text,options:options.map(([text,tea])=>({text,tea}))});
export const quizVersion='2026-10-11-mb-tea-i';
export const questions=[
q("朝早起身，你嘅狀態係？",[["即刻彈起，趕住搭車","廿四味"],["慢慢起身，飲杯水先","五花茶"],["呆呆滯滯，未瞓醒","竹蔗茅根"],["尋晚捱夜，黑眼圈好大","夏枯草"]]),
q("捱完個朝早，終於到Lunch time，你會？",[["同friend去食韓燒或者炸雞，用重口味刺激自己味蕾","廿四味"],["必食茶餐廳常餐，再加杯凍奶茶——好食又夠飽，慰勞下自己","五花茶"],["揀啲湯湯水水或者開胃嘅嘢，唔想咁油膩","竹蔗茅根"],["去café靜靜地食個輕食算數，留返啲時間唞下","夏枯草"]]),
q("趕deadline嘅時候，你會？",[["好燥底，好急，容易發脾氣","廿四味"],["口乾，飲杯手搖解下渴","五花茶"],["好頹，完全冇胃口","竹蔗茅根"],["對住個螢幕，眼乾又頭痛","夏枯草"]]),
q("收工前一刻，groupmate或者老細突然急call，你當刻嘅反應係？",[["燥底，想即刻當場鬧爆佢，要食啲零食嚟舒壓","廿四味"],["大嘆一口氣，垂頭喪氣咁行返去做嘢，接受現實","五花茶"],["飲啖水冷靜下，準備同對方討論：「呢個位其實可以咁樣做…」","竹蔗茅根"],["呆咗喺度，心入面嘅電量瞬間跌到落0%","夏枯草"]]),
q("壓力大嘅時候，你會？",[["食辣嘢、做運動最解壓","廿四味"],["打電話同朋友呻下","五花茶"],["瞓一覺就無事","竹蔗茅根"],["自己一個冷靜消化","夏枯草"]]),
q("終於到星期六日，你會點樣「回血」放鬆？",[["約埋一班friend去食打邊爐或者去旺區行街食好西","廿四味"],["自己周圍行下，去新開嘅café或者捐窿捐罅發掘小店","五花茶"],["同friend傾計吹水，一邊食甜品一邊歎返杯嘢飲","竹蔗茅根"],["摺埋喺屋企捱夜煲劇或者打機，謝絕社交","夏枯草"]]),
q("一轉季，你最怕嘅係？",[["成面爆瘡，喉嚨痛","廿四味"],["周身唔聚財，完全唔想郁","五花茶"],["皮膚乾燥甩皮","竹蔗茅根"],["眼乾又口乾","夏枯草"]]),
q("同朋友聚會，你嘅角色係？",[["帶動氣氛，最緊要大家玩得開心","廿四味"],["細心留意，默默照顧大家","五花茶"],["遲到大王，行兩步就攰","竹蔗茅根"],["坐係度聽下大家分享，偶爾靈魂出竅","夏枯草"]]),
q("你認為喺香港嘅生存哲學係……？",[["「及時行樂，work hard play hard!!!」","廿四味"],["「隨遇而安啦，喺呢個急速嘅城市入面搵到平衡。」","五花茶"],["「搵到屬於自己嘅路向，做好自己就ok~」","竹蔗茅根"],["「人生苦短，我淨係想好好生存落去……」","夏枯草"]]),
q("你覺得自己幾時需要飲涼茶？",[["清熱氣，唔使咁燥底","廿四味"],["夏天消暑解渴","五花茶"],["食完嘢消滯","竹蔗茅根"],["捱夜之後排下毒","夏枯草"]])
];
export function calculateResult(answers){
 if(!Array.isArray(answers)||answers.length!==10||answers.some((a,i)=>!Number.isInteger(a)||!questions[i].options[a]))throw new Error('請完成十題。');
 const scores=Object.fromEntries(order.map(t=>[t,0]));
 answers.forEach((a,i)=>scores[questions[i].options[a].tea]++);
 const max=Math.max(...Object.values(scores));const leaders=order.filter(t=>scores[t]===max);
 return {tea:leaders.length===1?leaders[0]:questions[9].options[answers[9]].tea,scores,tied:leaders.length>1};
}
export const signalCards=[
 {id:'commute',category:'返學搭車',tag:'給需要 Me Time 嘅你',title:'耳機戴好，\n世界暫時靜音。',text:'由車窗望出去，今日嘅你，想唞一唞？',signal:'想放空 · 需要 Me Time',tea:'竹蔗茅根',color:'blue',icon:'headphones',question:'你搭車係聽歌派，定閉目養神派？',tip:'留少少空間畀自己，放低手機，望一望窗外。'},
 {id:'deadline',category:'趕 deadline',tag:'給仲未收工嘅你',title:'個腦仲 online，\n電量已經見紅。',text:'凌晨個 chat 仲著住燈，你都未休息？',signal:'熬夜 · 眼攰',tea:'夏枯草',color:'yellow',icon:'battery',question:'如果身體得返 20% 電，你會點充電？',tip:'做完一小段，就停一停。畀眼睛同自己一個休息位。'},
 {id:'meeting',category:'開會日常',tag:'給高負載運行嘅你',title:'訊息覆唔切，\n自己嗰句未讀。',text:'會議一個接一個，留意到自己嘅訊號未？',signal:'忙碌 · 想爆',tea:'廿四味',color:'coral',icon:'chat',question:'你係帶節奏嗰個，定默默抄筆記嗰個？',tip:'行程再滿，都留返一格時間畀自己。下一個通知，可以等陣先覆。'}
];
export const gameScenarios=[
 {text:'朝早追巴士，返到公司又開會。個腦只得一個字：衝！',key:'廿四味',hint:'關鍵字：行動快、主導節奏、講義氣。'},
 {text:'成日幫朋友諗食咩、記低大家嘅安排。我習慣慢慢消化。',key:'五花茶',hint:'關鍵字：溫和、穩定、照顧大家。'},
 {text:'今日想戴住耳機望窗外。手機靜音，留返啲 Me Time 畀自己。',key:'竹蔗茅根',hint:'關鍵字：慢熱、溫柔、默默觀察。'},
 {text:'凌晨先最有靈感，雖然諗好多，但最後一定交到貨。',key:'夏枯草',hint:'關鍵字：夜貓、深思、有責任感。'}
];
Object.assign(teas['廿四味'],{fact:'官方歷史產品資料列有「廿四味」傳統漢方涼茶。',url:'https://www.hungfooktongholdings.com/pdf/prospectus_tc.PDF',sourceLabel:'官方招股章程 · 歷史產品資料'});
Object.assign(teas['五花茶'],{fact:'2022 年官方資料：1L 五花茶無添加防腐劑及人造色素；資料只適用於該規格。',url:'https://www.hungfooktongholdings.com/pdf/press/202206231708501720538060_en.pdf',sourceLabel:'官方新聞稿 · 2022'});
Object.assign(teas['竹蔗茅根'],{product:'竹蔗茅根飲品',fact:'2017 年官方資料列有「竹蔗茅根飲品」及 1.5L 規格。',url:'https://www.hungfooktong.com/wp-content/uploads/pdf/mediarelease/20170811_%E9%B4%BB%E7%A6%8F%E5%A0%82x%20LINE%20FRIENDS%E7%89%B9%E5%88%A5%E7%89%88%E9%A3%B2%E5%93%81%E5%8F%8A%E7%A6%AE%E5%93%81%E7%99%BB%E5%A0%B4%EF%BC%81.pdf',sourceLabel:'官方新聞稿 · 2017'});
Object.assign(teas['夏枯草'],{product:'低糖夏枯草',fact:'2024 年官方資料：500mL「低糖夏枯草」列為無添加飲品系列之一。',url:'https://www.hungfooktongholdings.com/pdf/press/20240628_tc.pdf',sourceLabel:'官方新聞稿 · 2024'});
