import{i as m,o as n,c as _,a as e,t as a,n as p,j as u,_ as f,b as l,F as v,r as g,d as i,f as k}from"./entry.337418eb.js";import{h as y}from"./houses.e3d02853.js";import{u as $}from"./vue.f36acd1f.3aead36b.js";const b={key:0,class:"row"},w=u('<h4 class="link item-long" data-v-23022f99>建案</h4><h4 class="header item-long" data-v-23022f99>開價</h4><h4 class="header item-long" data-v-23022f99>登錄筆數</h4><h4 class="header item" data-v-23022f99>均價</h4><h4 class="header item" data-v-23022f99>最高</h4><h4 class="header item" data-v-23022f99>最低</h4>',6),H=[w],N=["href"],x={class:"header item-long"},B={class:"header item-long"},S={class:"header item"},V={class:"header item"},R={class:"header item"},T=m({__name:"Row",props:{每坪開價:{},建案:{},一年成交均價:{},登錄筆數:{},最高實價:{},最低實價:{},index:{},isHeader:{type:Boolean}},setup(r){return(s,o)=>s.isHeader?(n(),_("div",b,H)):(n(),_("div",{key:1,class:"row",style:p(s.index%2===0?{background:"rgba(128,128,128,0.15)"}:{background:"rgba(255,255,255,0.1)"})},[e("a",{href:`/houses/${s.建案}`,class:"link item-long"},a(s.建案),9,N),e("p",x,a(s.每坪開價),1),e("p",B,a(s.登錄筆數),1),e("p",S,a(s.一年成交均價),1),e("p",V,a(s.最高實價),1),e("p",R,a(s.最低實價),1)],4))}});const z=f(T,[["__scopeId","data-v-23022f99"]]),F={class:""},j={class:""},A=e("h3",null,"新建案列表",-1),C=e("p",null,[i(" 資料更新: 2023/08/10, 本網頁資訊非即時更新資料。請點擊 "),e("mark",null,"建案連接"),i(" 查詢即時資訊。 ")],-1),D={class:""},E={class:""},I={__name:"Table",setup(r){const s={newSorted:[...y].filter(o=>o.選擇==="Y").sort((o,c)=>o.No-c.No)};return(o,c)=>{const d=z;return n(),_("div",F,[e("div",j,[A,C,e("div",D,[e("div",E,[l(d,{isHeader:!0}),(n(!0),_(v,null,g(s.newSorted,(t,h)=>(n(),k(d,{key:t.id,建案:t.建案,每坪開價:t.每坪開價,一年成交均價:t.一年成交均價,登錄筆數:t.登錄筆數,最高實價:t.最高實價,最低實價:t.最低實價,index:h},null,8,["建案","每坪開價","一年成交均價","登錄筆數","最高實價","最低實價","index"]))),128))])])])])}}},L=I,O={class:"container"},Y=e("h1",null,"城市探索 - A7重劃區 新推建案匯總",-1),K={__name:"index",setup(r){return $({title:"新推建案"}),(s,o)=>{const c=L;return n(),_("div",O,[Y,l(c)])}}};export{K as default};
