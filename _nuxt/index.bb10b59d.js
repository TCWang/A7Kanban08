import{i as Q,o as n,c,a as e,t,n as m,j as p,_ as b,d as _,b as l,F as u,r as A,f as v}from"./entry.460d20e8.js";import{h as k}from"./houses.3cf75120.js";import{u as P}from"./vue.f36acd1f.068ddd3d.js";const f={key:0,class:"row"},g=p('<h4 class="link item-long" data-v-c1dbbea4>建案</h4><h4 class="header item" data-v-c1dbbea4>Q1成交</h4><h4 class="header item" data-v-c1dbbea4>Q2成交</h4><h4 class="header item" data-v-c1dbbea4>Q3成交</h4><h4 class="header item" data-v-c1dbbea4>Q1均價</h4><h4 class="header item" data-v-c1dbbea4>Q2均價</h4><h4 class="header item" data-v-c1dbbea4>Q3均價</h4>',7),w=[g],y=["href"],$={class:"header item"},x={class:"header item"},B={class:"header item"},N={class:"header item"},S={class:"header item"},H={class:"header item"},V=Q({__name:"Row",props:{建案:{},AQ1:{},AQ2:{},AQ3:{},AQ4:{},PQ1:{},PQ2:{},PQ3:{},PQ4:{},index:{},isHeader:{type:Boolean}},setup(r){return(s,o)=>s.isHeader?(n(),c("div",f,w)):(n(),c("div",{key:1,class:"row",style:m(s.index%2===0?{background:"rgba(128,128,128,0.15)"}:{background:"rgba(255,255,255,0.1)"})},[e("a",{href:`/market/${s.建案}`,class:"link item-long"},t(s.建案),9,y),e("p",$,t(s.AQ1),1),e("p",x,t(s.AQ2),1),e("p",B,t(s.AQ3),1),e("p",N,t(s.PQ1),1),e("p",S,t(s.PQ2),1),e("p",H,t(s.PQ3),1)],4))}});const F=b(V,[["__scopeId","data-v-c1dbbea4"]]),M={class:""},R={class:""},T=e("h3",null,"A7建案 熱銷排行榜",-1),z=e("p",null,[_(" 資料來源; Facebook A7重劃區大小事 / "),e("a",{href:"https://www.facebook.com/groups/1951117865015671/permalink/6529109273883151/?mibextid=oMANbw"},"李世豪 2023/10/21"),_("。 ")],-1),j={class:""},C={class:""},D={__name:"Table",setup(r){const s={newSorted:[...k].filter(o=>o.選擇2==="Y").sort((o,d)=>d.AQ3-o.AQ3)};return(o,d)=>{const i=F;return n(),c("div",M,[e("div",R,[T,_(" 依據前一季成交量排序。 "),z,e("div",j,[e("div",C,[l(i,{isHeader:!0}),(n(!0),c(u,null,A(s.newSorted,(a,h)=>(n(),v(i,{key:a.id,建案:a.建案,AQ1:a.AQ1,AQ2:a.AQ2,AQ3:a.AQ3,PQ1:a.PQ1,PQ2:a.PQ2,PQ3:a.PQ3,index:h},null,8,["建案","AQ1","AQ2","AQ3","PQ1","PQ2","PQ3","index"]))),128))])])])])}}},E=D,I={class:"container"},L=e("h1",null,"城市探索 - A7重劃區 建案房屋市場行情",-1),G={__name:"index",setup(r){return P({title:"房市行情"}),(s,o)=>{const d=E;return n(),c("div",I,[L,l(d)])}}};export{G as default};
