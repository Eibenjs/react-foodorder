(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{16:function(t,e,a){t.exports={"cart-items":"Cart_cart-items__2cbIU","main-div":"Cart_main-div__3ZPP5",total:"Cart_total__2EY0N",actions:"Cart_actions__2xu_Y","button--alt":"Cart_button--alt__BCc51",button:"Cart_button__3kt30",swiper:"Cart_swiper__2Xr66",sug:"Cart_sug__1CEOk",sugLeft:"Cart_sugLeft__3rOJ3",sugLeftTexts:"Cart_sugLeftTexts__2wA8n",sugButton:"Cart_sugButton__20kBU",sugLeftName:"Cart_sugLeftName__1APrq",sugLeftDesc:"Cart_sugLeftDesc__2smYV",sugLeftPrice:"Cart_sugLeftPrice__3hN5b"}},18:function(t,e,a){t.exports={orderItem:"OrderItem_orderItem__3fkVi",typo:"OrderItem_typo__UvIEO",typoLeftOrderOwner:"OrderItem_typoLeftOrderOwner__3-lM6",typoLeft:"OrderItem_typoLeft__36uDe",typoLeftMealIn:"OrderItem_typoLeftMealIn__1Uo1j",typoLeftMealImDiv:"OrderItem_typoLeftMealImDiv__1HQSz",typeLeftMealDet:"OrderItem_typeLeftMealDet__19tLI",typeLeftMealDetB:"OrderItem_typeLeftMealDetB__2Jq0B",typeLeftMealDetP:"OrderItem_typeLeftMealDetP__2hB4P",typoRight:"OrderItem_typoRight__15Pki",typoRightTotal:"OrderItem_typoRightTotal__Bap3J",typoRightButton:"OrderItem_typoRightButton__3CnO6"}},26:function(t,e,a){t.exports={meals:"AvailableMeals_meals__2VsUD","meals-appear":"AvailableMeals_meals-appear__IP1pe",cardSection:"AvailableMeals_cardSection__2DucG",inputText:"AvailableMeals_inputText__2r6A9",altForm:"AvailableMeals_altForm__3iY-b",leftSection:"AvailableMeals_leftSection__2piBP",rightSection:"AvailableMeals_rightSection__3S_MJ",mealsList:"AvailableMeals_mealsList__1CLYL",filterSection:"AvailableMeals_filterSection__2_hiz"}},34:function(t,e,a){t.exports={meal:"MealItem_meal__wV5Zk","first-place":"MealItem_first-place__HHxQE","margin-left":"MealItem_margin-left__189ws",description:"MealItem_description__3xhP9",price:"MealItem_price__3Sgh3"}},35:function(t,e,a){t.exports={"cart-item":"CartItem_cart-item__kYsLT",summary:"CartItem_summary__1FDKi",price:"CartItem_price__1jl-T",amount:"CartItem_amount__2X2Yj",actions:"CartItem_actions__1C7Tt"}},41:function(t,e,a){t.exports={button:"HeaderCartButton_button__1S4oS",icon:"HeaderCartButton_icon__8hH0J",badge:"HeaderCartButton_badge__2fAaN",bump:"HeaderCartButton_bump__1zCQD"}},52:function(t,e,a){t.exports={header:"Header_header__1dS8x",h1Sec:"Header_h1Sec__1VZ9x",rightSec:"Header_rightSec__3Xube"}},53:function(t,e,a){t.exports={orderMain:"Order_orderMain__3ianM",firstDiv:"Order_firstDiv__r9OIt",secondDiv:"Order_secondDiv__1CMeG"}},60:function(t,e,a){t.exports={button:"HeaderSpecialButton_button__3zT9g",icon:"HeaderSpecialButton_icon__3ZO09",badge:"HeaderSpecialButton_badge__2Dfbe",bump:"HeaderSpecialButton_bump__vRgVG"}},68:function(t,e,a){t.exports={form:"MealItemForm_form__uA3bj"}},69:function(t,e,a){t.exports={input:"Input_input__3jqcT"}},70:function(t,e,a){t.exports={card:"Card_card__2VMWi"}},85:function(t,e,a){},89:function(t,e,a){},96:function(t,e,a){"use strict";a.r(e);var c=a(66),n=a.n(c),i=(a(85),a(6)),r=a(0),s=a.n(r),o=a(59),d=a(67),l=function(t){var e=arguments;return Object(d.a)(Object(o.a)().mark((function a(){var c;return Object(o.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=e.length>1&&void 0!==e[1]?e[1]:{},a.abrupt("return",fetch("https://react-foodorder/".concat(t),{method:"post",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(c)}));case 2:case"end":return a.stop()}}),a)})))()},m=a(52),p=a.n(m),u=a(1),j=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},h=s.a.createContext({items:[],totalAmount:0,addItem:function(t){},removeItem:function(t){}}),b=a(41),O=a.n(b),_=function(t){var e=Object(r.useState)(!1),a=Object(i.a)(e,2),c=a[0],n=a[1],s=Object(r.useContext)(h),o=s.items.reduce((function(t,e){return t+e.amount}),0),d="".concat(O.a.button," ").concat(c?O.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.items.length){n(!0);var t=setTimeout((function(){n(!1)}),300);return function(){clearTimeout(t)}}}),[s.items]),Object(u.jsxs)("button",{onClick:t.onClick,className:d,children:[Object(u.jsx)("span",{className:O.a.icon,children:Object(u.jsx)(j,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:O.a.badge,children:o})]})},f=a(60),x=a.n(f),g=function(t){return Object(u.jsxs)("button",{onClick:t.onClick,className:x.a.button,children:[Object(u.jsx)("span",{className:x.a.icon,children:Object(u.jsx)(j,{})}),Object(u.jsx)("span",{children:"Orders"})]})},v=function(t){var e=Object(r.useState)(!0),a=Object(i.a)(e,2),c=a[0];a[1];return Object(u.jsx)(s.a.Fragment,{children:Object(u.jsxs)("header",{className:p.a.header,children:[Object(u.jsx)("h1",{className:p.a.h1Sec,children:"Meals"}),Object(u.jsxs)("div",{className:p.a.rightSec,children:[c?Object(u.jsx)(g,{onClick:t.onShowOrder}):"",Object(u.jsx)(_,{onClick:t.onShowCart})]})]})})},y=a(7),k=a(26),N=a.n(k),C=a(34),S=a.n(C),I=a(68),P=a.n(I),w=a(22),z=a(69),L=a.n(z),M=s.a.forwardRef((function(t,e){return Object(u.jsxs)("div",{className:L.a.input,children:[Object(u.jsx)("label",{htmlFor:t.input.id,children:t.label}),Object(u.jsx)("input",Object(w.a)({style:{width:t.width},ref:e},t.input))]})})),A=function(t){var e=Object(r.useState)(!0),a=Object(i.a)(e,2),c=a[0],n=a[1],s=Object(r.useRef)();return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=s.current.value,c=+a;0===a.trim().length||c<1||c>50?n(!1):t.onAddToCart(c)},className:P.a.form,children:[Object(u.jsx)(M,{width:"3rem",ref:s,label:"Amount",input:{id:"amount_"+t.id,type:"number",min:"1",max:"50",step:"1",defaultValue:"1"}}),Object(u.jsx)("button",{type:"submit",children:"+ Add"}),!c&&Object(u.jsx)("p",{children:"Gecerli bir sayi gir"})]})},D=function(t){var e=Object(r.useContext)(h),a="$".concat(t.price.toFixed(2));return Object(u.jsxs)("li",{className:S.a.meal,children:[Object(u.jsxs)("div",{className:S.a["first-place"],children:[Object(u.jsx)("img",{src:t.imagesrc}),Object(u.jsxs)("div",{className:S.a["margin-left"],children:[Object(u.jsx)("h3",{children:t.name}),Object(u.jsx)("div",{className:S.a.description,children:t.description}),Object(u.jsx)("div",{className:S.a.price,children:Object(u.jsx)("div",{children:a})})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)(A,{onAddToCart:function(a){e.addItem({id:t.id,name:t.name,amount:a,price:t.price}),t.addSugHandler({id:t.id,name:t.name,amount:a,price:t.price})},id:t.id})})]})},B=a(70),H=a.n(B),E=function(t){return Object(u.jsx)("div",{style:t.style,className:H.a.card,children:t.children})},T=a(23),R=a(62),F=(a(87),a(88),a(35)),V=a.n(F),J=function(t){var e="$".concat(t.price.toFixed(2));return Object(u.jsxs)("li",{className:V.a["cart-item"],children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t.name}),Object(u.jsxs)("div",{className:V.a.summary,children:[Object(u.jsx)("span",{className:V.a.price,children:e}),Object(u.jsxs)("span",{className:V.a.amount,children:["x ",t.amount]})]})]}),Object(u.jsxs)("div",{className:V.a.actions,children:[Object(u.jsx)("button",{onClick:t.onRemove,children:"\u2212"}),Object(u.jsx)("button",{onClick:t.onAdd,children:"+"})]})]})},Y=a(16),G=a.n(Y),U=(a(89),function(t){var e=Object(r.useState)(!1),a=Object(i.a)(e,2),c=a[0],n=a[1],s=Object(r.useContext)(h),o="$".concat(s.totalAmount.toFixed(2)),d=s.items.length>0,l=function(t){s.removeItem(t)};Object(r.useEffect)((function(){0===t.suggestions.length?n(!1):n(!0)}),[t.suggestions]);var m=function(t){s.addItem(Object(w.a)(Object(w.a)({},t),{},{amount:1}))},p=Object(u.jsx)("ul",{className:G.a["cart-items"],style:{height:c?"70.5%":"85.5%"},children:s.items.map((function(t){return Object(u.jsx)(J,{name:t.name,amount:t.amount,price:t.price,onRemove:l.bind(null,t.id),onAdd:m.bind(null,t)},t.id)}))});return Object(u.jsxs)("div",{className:"".concat(G.a["main-div"]," ").concat(t.className),children:[p,c?Object(u.jsx)(R.a,{navigation:!0,modules:[T.a],className:G.a.swiper,children:t.suggestions.map((function(t){return Object(u.jsx)(R.b,{className:G.a.sug,children:Object(u.jsxs)("div",{className:G.a.sugLeft,children:[Object(u.jsx)("img",{src:t.altPic}),Object(u.jsxs)("div",{className:G.a.sugLeftTexts,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:G.a.sugLeftName,children:t.name}),Object(u.jsx)("div",{className:G.a.sugLeftDesc,children:t.description})]}),Object(u.jsxs)("div",{className:G.a.sugLeftPrice,children:[Object(u.jsxs)("div",{children:["$",t.price]}),Object(u.jsx)("button",{onClick:m.bind(null,t),className:G.a.sugButton,children:"+"})]})]})]})},t.id)}))}):"",Object(u.jsxs)("div",{className:G.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:o})]}),Object(u.jsxs)("div",{className:G.a.actions,children:[Object(u.jsx)("button",{className:G.a["button--alt"],onClick:t.onClose,children:"Close"}),d&&Object(u.jsx)("button",{onClick:function(){console.log(s.items)},className:G.a.button,children:"Order"})]})]})}),$=[{name:"choc",id:"ca1"},{name:"anan",id:"ca2"},{name:"baban",id:"ca3"},{name:"deden",id:"ca4"},{name:"cocuk",id:"ca5"}],q=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99,category:"choc",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5,category:"choc",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99,category:"choc",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99,category:"deden",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{id:"m5",name:"tas kebabi",description:"Healthy...and green...",price:18.99,category:"choc",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{id:"m6",name:"kelle paca",description:"Healthy...and green...",price:18.99,category:"baban",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{id:"m7",name:"tavuk izgara",description:"Healthy...and green...",price:18.99,category:"cocuk",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{id:"m8",name:"corba",description:"Healthy...and green...",price:18.99,category:"cocuk",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"}],Z=function(t){var e=Object(r.useState)(q),a=Object(i.a)(e,2),c=a[0],n=a[1],s=Object(r.useState)([]),o=Object(i.a)(s,2),d=o[0],l=o[1],m=Object(r.useState)([]),p=Object(i.a)(m,2),j=p[0],h=p[1];Object(r.useEffect)((function(){!function(){if(0!==j.length){var t=q.filter((function(t){return j.includes(t.category)})).map((function(t){return{id:t.id,name:t.name,description:t.description,price:t.price,category:t.category,altPic:t.altPic}}));n(t)}else n(q)}()}),[j]);var b=function(t){var e=Object(y.a)(j);if(j.includes(t.target.name)){var a=e.indexOf(t.target.name);e.splice(a,1),h(e)}else e=[].concat(Object(y.a)(j),[t.target.name]),h(e)},O=function(t){var e=q.findIndex((function(e){return e.id===t.id})),a=q.filter((function(t){return t.category===q[e].category&&t.name!==q[e].name})).map((function(t){return{id:t.id,name:t.name,description:t.description,price:t.price,category:t.category,altPic:t.altPic}}));a.length>0?l(a):l([])},_=$.map((function(t,e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("input",{type:"checkbox",onChange:b,id:"custom-checkbox-".concat(e),name:t.name}),Object(u.jsx)("label",{htmlFor:"custom-checkbox-".concat(e),children:t.name})]},e)})),f=c.map((function(t){return Object(u.jsx)(D,{id:t.id,name:t.name,description:t.description,price:t.price,imagesrc:t.altPic,addSugHandler:O},t.id)}));return Object(u.jsx)("section",{className:N.a.meals,children:Object(u.jsxs)(E,{className:N.a.cardSection,children:[Object(u.jsxs)("div",{style:{width:t.cartIsShown?"60%":"100%"},className:N.a.leftSection,children:[Object(u.jsx)("div",{className:N.a.filterSection,children:Object(u.jsx)("ul",{className:N.a.altForm,children:_})}),Object(u.jsx)("ul",{className:N.a.mealsList,children:f})]}),t.cartIsShown&&Object(u.jsx)(U,{suggestions:d,className:N.a.rightSection,onClose:t.onClose})]})})},Q=function(t){return Object(u.jsx)(s.a.Fragment,{children:Object(u.jsx)(Z,{cartIsShown:t.cartIsShown,onClose:t.cartOnClose})})},X={items:[],totalAmount:0},W=function(t,e){if("ADD"===e.type){var a,c=t.totalAmount+e.item.price*e.item.amount,n=t.items.findIndex((function(t){return t.id===e.item.id})),i=t.items[n];if(i){var r=Object(w.a)(Object(w.a)({},i),{},{amount:i.amount+e.item.amount});(a=Object(y.a)(t.items))[n]=r}else a=t.items.concat(e.item);return{items:a,totalAmount:c}}if("REMOVE"===e.type){var s,o=t.items.findIndex((function(t){return t.id===e.id})),d=t.items[o],l=t.totalAmount-d.price;if(1===d.amount)s=t.items.filter((function(t){return t.id!==e.id}));else{var m=Object(w.a)(Object(w.a)({},d),{},{amount:d.amount-1});(s=Object(y.a)(t.items))[o]=m}return{items:s,totalAmount:l}}return X},K=function(t){var e=Object(r.useReducer)(W,X),a=Object(i.a)(e,2),c=a[0],n=a[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(t){n({type:"ADD",item:t})},removeItem:function(t){n({type:"REMOVE",id:t})}};return Object(u.jsx)(h.Provider,{value:s,children:t.children})},tt=a(53),et=a.n(tt),at=a(119),ct=a(120),nt=a(123),it=a(122),rt=a(72),st=a.n(rt),ot=a(18),dt=a.n(ot),lt=function(t){var e=0;t.item.orders.forEach((function(t){var a=t.amount*t.price;e+=a}));var a=e.toFixed(2);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(at.a,{className:dt.a.orderItem,children:[Object(u.jsx)(ct.a,{expandIcon:Object(u.jsx)(st.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(u.jsxs)(it.a,{children:["Siparis Numarasi: ",t.item.id]})}),Object(u.jsx)(nt.a,{children:Object(u.jsxs)(it.a,{className:dt.a.typo,component:"div",children:[Object(u.jsxs)("div",{className:dt.a.typoLeft,children:[Object(u.jsxs)("div",{className:dt.a.typoLeftOrderOwner,children:["Siparis Veren:",Object(u.jsxs)("span",{children:[" ",t.item.orderOwner]})]}),Object(u.jsx)("div",{className:dt.a.typoLeftMeal,children:Object(u.jsx)("div",{className:dt.a.typoLeftMealIn,children:t.item.orders.map((function(t){return Object(u.jsxs)("div",{className:dt.a.typoLeftMealImDiv,children:[Object(u.jsx)("img",{src:t.altPic}),Object(u.jsxs)("div",{className:dt.a.typeLeftMealDet,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:dt.a.typeLeftMealDetB,children:t.name}),Object(u.jsxs)("span",{children:["Adet: ",t.amount]})]}),Object(u.jsxs)("span",{className:dt.a.typeLeftMealDetP,children:["$",t.price]})]})]},Math.random())}))})})]}),Object(u.jsxs)("div",{className:dt.a.typoRight,children:[Object(u.jsxs)("div",{className:dt.a.typoRightTotal,children:["Total: ",Object(u.jsxs)("span",{children:["$",a]})]}),Object(u.jsxs)("div",{className:dt.a.typoRightButton,children:[Object(u.jsx)("button",{style:{backgroundColor:"#424242"},onClick:function(){console.log(t.item.id+" teslim edildi")},children:"Teslim Edldi"}),Object(u.jsx)("button",{onClick:function(){console.log(t.item.id+" silindi")},children:"Iptal Et"})]})]})]})})]})})},mt=[{id:"123456",orderOwner:"yavzu",orders:[{name:"tas kebabi",amount:"2",price:"18.99",altPic:"https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000"},{name:"Sushi",amount:"1",price:"22.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"}]},{id:"321451",orderOwner:"eminadam",orders:[{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"}]},{id:"421312",orderOwner:"whiteattackalp",orders:[{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"}]},{id:"456789",orderOwner:"pttfixfqx",orders:[{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"}]},{id:"897895",orderOwner:"kralattack",orders:[{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"}]}],pt=Math.ceil(mt.length/2),ut=mt.splice(0,pt),jt=mt.splice(-pt),ht=function(t){return Object(u.jsx)("section",{className:et.a.orderMain,children:Object(u.jsxs)(E,{style:{height:"100%",display:"flex",overflow:"auto"},children:[Object(u.jsx)("div",{className:et.a.firstDiv,children:ut.map((function(t){return Object(u.jsx)(lt,{item:t},t.id)}))}),Object(u.jsx)("div",{className:et.a.secondDiv,children:jt.map((function(t){return Object(u.jsx)(lt,{item:t},t.id)}))})]})})};var bt=function(){var t=Object(r.useState)(!0),e=Object(i.a)(t,2),a=e[0],c=e[1],n=Object(r.useState)(!1),s=Object(i.a)(n,2),o=s[0],d=s[1],m=Object(r.useState)(!1),p=Object(i.a)(m,2),j=p[0],h=p[1],b=function(){c(!0),l("exit_focus",{})};return window.addEventListener("keydown",(function(t){"Escape"===t.key&&b()})),window.addEventListener("message",(function(t){var e=t.data.type;"SHOW_PAGE"===e?c(!1):"CLOSE_PAGE"===e&&b()})),Object(u.jsx)("div",{style:{display:a?"none":"block",width:"100%",height:"100%"},children:Object(u.jsxs)(K,{hidden:a,children:[Object(u.jsx)(v,{onShowOrder:function(){h(!j)},onShowCart:function(){d(!0)}}),Object(u.jsx)("main",{children:j?Object(u.jsx)(ht,{}):Object(u.jsx)(Q,{cartOnClose:function(){d(!1)},cartIsShown:o})})]})})};n.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(bt,{}))}},[[96,1,2]]]);
//# sourceMappingURL=main.fce39a1f.chunk.js.map