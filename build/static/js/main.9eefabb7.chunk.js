(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{16:function(t,e,a){t.exports={"cart-items":"Cart_cart-items__2cbIU","main-div":"Cart_main-div__3ZPP5",total:"Cart_total__2EY0N",actions:"Cart_actions__2xu_Y","button--alt":"Cart_button--alt__BCc51",button:"Cart_button__3kt30",swiper:"Cart_swiper__2Xr66",sug:"Cart_sug__1CEOk",sugLeft:"Cart_sugLeft__3rOJ3",sugLeftTexts:"Cart_sugLeftTexts__2wA8n",sugButton:"Cart_sugButton__20kBU",sugLeftName:"Cart_sugLeftName__1APrq",sugLeftDesc:"Cart_sugLeftDesc__2smYV",sugLeftPrice:"Cart_sugLeftPrice__3hN5b"}},18:function(t,e,a){t.exports={orderItem:"OrderItem_orderItem__3fkVi",typo:"OrderItem_typo__UvIEO",typoLeftOrderOwner:"OrderItem_typoLeftOrderOwner__3-lM6",typoLeft:"OrderItem_typoLeft__36uDe",typoLeftMealIn:"OrderItem_typoLeftMealIn__1Uo1j",typoLeftMealImDiv:"OrderItem_typoLeftMealImDiv__1HQSz",typeLeftMealDet:"OrderItem_typeLeftMealDet__19tLI",typeLeftMealDetB:"OrderItem_typeLeftMealDetB__2Jq0B",typeLeftMealDetP:"OrderItem_typeLeftMealDetP__2hB4P",typoRight:"OrderItem_typoRight__15Pki",typoRightTotal:"OrderItem_typoRightTotal__Bap3J",typoRightButton:"OrderItem_typoRightButton__3CnO6"}},26:function(t,e,a){t.exports={meals:"AvailableMeals_meals__2VsUD","meals-appear":"AvailableMeals_meals-appear__IP1pe",cardSection:"AvailableMeals_cardSection__2DucG",inputText:"AvailableMeals_inputText__2r6A9",altForm:"AvailableMeals_altForm__3iY-b",leftSection:"AvailableMeals_leftSection__2piBP",rightSection:"AvailableMeals_rightSection__3S_MJ",mealsList:"AvailableMeals_mealsList__1CLYL",filterSection:"AvailableMeals_filterSection__2_hiz"}},34:function(t,e,a){t.exports={meal:"MealItem_meal__wV5Zk","first-place":"MealItem_first-place__HHxQE","margin-left":"MealItem_margin-left__189ws",description:"MealItem_description__3xhP9",price:"MealItem_price__3Sgh3"}},35:function(t,e,a){t.exports={"cart-item":"CartItem_cart-item__kYsLT",summary:"CartItem_summary__1FDKi",price:"CartItem_price__1jl-T",amount:"CartItem_amount__2X2Yj",actions:"CartItem_actions__1C7Tt"}},41:function(t,e,a){t.exports={button:"HeaderCartButton_button__1S4oS",icon:"HeaderCartButton_icon__8hH0J",badge:"HeaderCartButton_badge__2fAaN",bump:"HeaderCartButton_bump__1zCQD"}},52:function(t,e,a){t.exports={header:"Header_header__1dS8x",h1Sec:"Header_h1Sec__1VZ9x",rightSec:"Header_rightSec__3Xube"}},53:function(t,e,a){t.exports={orderMain:"Order_orderMain__3ianM",firstDiv:"Order_firstDiv__r9OIt",secondDiv:"Order_secondDiv__1CMeG"}},59:function(t,e,a){t.exports={button:"HeaderSpecialButton_button__3zT9g",icon:"HeaderSpecialButton_icon__3ZO09",badge:"HeaderSpecialButton_badge__2Dfbe",bump:"HeaderSpecialButton_bump__vRgVG"}},67:function(t,e,a){t.exports={form:"MealItemForm_form__uA3bj"}},68:function(t,e,a){t.exports={input:"Input_input__3jqcT"}},69:function(t,e,a){t.exports={card:"Card_card__2VMWi"}},85:function(t,e,a){},89:function(t,e,a){},96:function(t,e,a){"use strict";a.r(e);var c=a(66),n=a.n(c),i=(a(85),a(6)),r=a(19),s=a(0),o=a.n(s),d=a(52),l=a.n(d),m=a(1),u=function(){return Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(m.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},p=o.a.createContext({items:[],totalAmount:0,addItem:function(t){},removeItem:function(t){}}),j=a(41),b=a.n(j),h=function(t){var e=Object(s.useState)(!1),a=Object(i.a)(e,2),c=a[0],n=a[1],r=Object(s.useContext)(p),o=r.items.reduce((function(t,e){return t+e.amount}),0),d="".concat(b.a.button," ").concat(c?b.a.bump:"");return Object(s.useEffect)((function(){if(0!==r.items.length){n(!0);var t=setTimeout((function(){n(!1)}),300);return function(){clearTimeout(t)}}}),[r.items]),Object(m.jsxs)("button",{onClick:t.onClick,className:d,children:[Object(m.jsx)("span",{className:b.a.icon,children:Object(m.jsx)(u,{})}),Object(m.jsx)("span",{children:"Your Cart"}),Object(m.jsx)("span",{className:b.a.badge,children:o})]})},O=a(59),_=a.n(O),f=function(t){return Object(m.jsxs)("button",{onClick:t.onClick,className:_.a.button,children:[Object(m.jsx)("span",{className:_.a.icon,children:Object(m.jsx)(u,{})}),Object(m.jsx)("span",{children:"Orders"})]})},x=function(t){return Object(m.jsx)(o.a.Fragment,{children:Object(m.jsxs)("header",{className:l.a.header,children:[Object(m.jsx)("h1",{className:l.a.h1Sec,children:"Meals"}),Object(m.jsxs)("div",{className:l.a.rightSec,children:[t.employe?Object(m.jsx)(f,{onClick:t.onShowOrder}):"",Object(m.jsx)(h,{onClick:t.onShowCart})]})]})})},g=a(7),v=a(26),y=a.n(v),N=a(34),C=a.n(N),k=a(67),S=a.n(k),I=a(68),w=a.n(I),L=o.a.forwardRef((function(t,e){return Object(m.jsxs)("div",{className:w.a.input,children:[Object(m.jsx)("label",{htmlFor:t.input.id,children:t.label}),Object(m.jsx)("input",Object(r.a)({style:{width:t.width},ref:e},t.input))]})})),M=function(t){var e=Object(s.useState)(!0),a=Object(i.a)(e,2),c=a[0],n=a[1],r=Object(s.useRef)();return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=r.current.value,c=+a;0===a.trim().length||c<1||c>50?n(!1):t.onAddToCart(c)},className:S.a.form,children:[Object(m.jsx)(L,{width:"3rem",ref:r,label:"Amount",input:{id:"amount_"+t.id,type:"number",min:"1",max:"50",step:"1",defaultValue:"1"}}),Object(m.jsx)("button",{type:"submit",children:"+ Add"}),!c&&Object(m.jsx)("p",{children:"Gecerli bir sayi gir"})]})},P=function(t){var e=Object(s.useContext)(p),a="$".concat(t.price.toFixed(2));return Object(m.jsxs)("li",{className:C.a.meal,children:[Object(m.jsxs)("div",{className:C.a["first-place"],children:[Object(m.jsx)("img",{src:t.imagesrc}),Object(m.jsxs)("div",{className:C.a["margin-left"],children:[Object(m.jsx)("h3",{children:t.name}),Object(m.jsx)("div",{className:C.a.description,children:t.description}),Object(m.jsx)("div",{className:C.a.price,children:Object(m.jsx)("div",{children:a})})]})]}),Object(m.jsx)("div",{children:Object(m.jsx)(M,{onAddToCart:function(a){e.addItem({id:t.id,name:t.name,amount:a,price:t.price}),t.addSugHandler({id:t.id,name:t.name,amount:a,price:t.price})},id:t.id})})]})},A=a(69),z=a.n(A),D=function(t){return Object(m.jsx)("div",{style:t.style,className:z.a.card,children:t.children})},B=a(23),T=a(62),H=(a(87),a(88),a(35)),E=a.n(H),R=function(t){var e="$".concat(t.price.toFixed(2));return Object(m.jsxs)("li",{className:E.a["cart-item"],children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:t.name}),Object(m.jsxs)("div",{className:E.a.summary,children:[Object(m.jsx)("span",{className:E.a.price,children:e}),Object(m.jsxs)("span",{className:E.a.amount,children:["x ",t.amount]})]})]}),Object(m.jsxs)("div",{className:E.a.actions,children:[Object(m.jsx)("button",{onClick:t.onRemove,children:"\u2212"}),Object(m.jsx)("button",{onClick:t.onAdd,children:"+"})]})]})},F=a(16),V=a.n(F),J=(a(89),function(t){var e=Object(s.useState)(!1),a=Object(i.a)(e,2),c=a[0],n=a[1],o=Object(s.useContext)(p),d="$".concat(o.totalAmount.toFixed(2)),l=o.items.length>0,u=function(t){o.removeItem(t)};Object(s.useEffect)((function(){0===t.suggestions.length?n(!1):n(!0)}),[t.suggestions]);var j=function(t){o.addItem(Object(r.a)(Object(r.a)({},t),{},{amount:1}))},b=Object(m.jsx)("ul",{className:V.a["cart-items"],style:{height:c?"70.5%":"85.5%"},children:o.items.map((function(t){return Object(m.jsx)(R,{name:t.name,amount:t.amount,price:t.price,onRemove:u.bind(null,t.id),onAdd:j.bind(null,t)},t.id)}))});return Object(m.jsxs)("div",{className:"".concat(V.a["main-div"]," ").concat(t.className),children:[b,c?Object(m.jsx)(T.a,{navigation:!0,modules:[B.a],className:V.a.swiper,children:t.suggestions.map((function(t){return Object(m.jsx)(T.b,{className:V.a.sug,children:Object(m.jsxs)("div",{className:V.a.sugLeft,children:[Object(m.jsx)("img",{src:t.altPic}),Object(m.jsxs)("div",{className:V.a.sugLeftTexts,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:V.a.sugLeftName,children:t.name}),Object(m.jsx)("div",{className:V.a.sugLeftDesc,children:t.description})]}),Object(m.jsxs)("div",{className:V.a.sugLeftPrice,children:[Object(m.jsxs)("div",{children:["$",t.price]}),Object(m.jsx)("button",{onClick:j.bind(null,t),className:V.a.sugButton,children:"+"})]})]})]})},t.id)}))}):"",Object(m.jsxs)("div",{className:V.a.total,children:[Object(m.jsx)("span",{children:"Total Amount"}),Object(m.jsx)("span",{children:d})]}),Object(m.jsxs)("div",{className:V.a.actions,children:[Object(m.jsx)("button",{className:V.a["button--alt"],onClick:t.onClose,children:"Close"}),l&&Object(m.jsx)("button",{onClick:function(){console.log(o.items)},className:V.a.button,children:"Order"})]})]})}),Y=function(t){var e=t.meals,a=t.category,c=Object(s.useState)(e),n=Object(i.a)(c,2),r=n[0],o=n[1],d=Object(s.useState)([]),l=Object(i.a)(d,2),u=l[0],p=l[1],j=Object(s.useState)([]),b=Object(i.a)(j,2),h=b[0],O=b[1];Object(s.useEffect)((function(){!function(){if(0!==h.length){var t=e.filter((function(t){return h.includes(t.category)})).map((function(t){return{id:t.id,name:t.name,description:t.description,price:t.price,category:t.category,altPic:t.altPic}}));o(t)}else o(e)}()}),[h]);var _=function(t){var e=Object(g.a)(h);if(h.includes(t.target.name)){var a=e.indexOf(t.target.name);e.splice(a,1),O(e)}else e=[].concat(Object(g.a)(h),[t.target.name]),O(e)},f=function(t){var a=e.findIndex((function(e){return e.id===t.id})),c=e.filter((function(t){return t.category===e[a].category&&t.name!==e[a].name})).map((function(t){return{id:t.id,name:t.name,description:t.description,price:t.price,category:t.category,altPic:t.altPic}}));c.length>0?p(c):p([])},x=a.map((function(t,e){return Object(m.jsxs)("li",{children:[Object(m.jsx)("input",{type:"checkbox",onChange:_,id:"custom-checkbox-".concat(e),name:t.name}),Object(m.jsx)("label",{htmlFor:"custom-checkbox-".concat(e),children:t.name})]},e)})),v=r.map((function(t){return Object(m.jsx)(P,{id:t.id,name:t.name,description:t.description,price:t.price,imagesrc:t.altPic,addSugHandler:f},t.id)}));return Object(m.jsx)("section",{className:y.a.meals,children:Object(m.jsxs)(D,{className:y.a.cardSection,children:[Object(m.jsxs)("div",{style:{width:t.cartIsShown?"60%":"100%"},className:y.a.leftSection,children:[Object(m.jsx)("div",{className:y.a.filterSection,children:Object(m.jsx)("ul",{className:y.a.altForm,children:x})}),Object(m.jsx)("ul",{className:y.a.mealsList,children:v})]}),t.cartIsShown&&Object(m.jsx)(J,{suggestions:u,className:y.a.rightSection,onClose:t.onClose})]})})},G=function(t){return Object(m.jsx)(o.a.Fragment,{children:Object(m.jsx)(Y,{meals:t.meals,category:t.category,cartIsShown:t.cartIsShown,onClose:t.cartOnClose})})},U={items:[],totalAmount:0},$=function(t,e){if("ADD"===e.type){var a,c=t.totalAmount+e.item.price*e.item.amount,n=t.items.findIndex((function(t){return t.id===e.item.id})),i=t.items[n];if(i){var s=Object(r.a)(Object(r.a)({},i),{},{amount:i.amount+e.item.amount});(a=Object(g.a)(t.items))[n]=s}else a=t.items.concat(e.item);return{items:a,totalAmount:c}}if("REMOVE"===e.type){var o,d=t.items.findIndex((function(t){return t.id===e.id})),l=t.items[d],m=t.totalAmount-l.price;if(1===l.amount)o=t.items.filter((function(t){return t.id!==e.id}));else{var u=Object(r.a)(Object(r.a)({},l),{},{amount:l.amount-1});(o=Object(g.a)(t.items))[d]=u}return{items:o,totalAmount:m}}return U},q=function(t){var e=Object(s.useReducer)($,U),a=Object(i.a)(e,2),c=a[0],n=a[1],r={items:c.items,totalAmount:c.totalAmount,addItem:function(t){n({type:"ADD",item:t})},removeItem:function(t){n({type:"REMOVE",id:t})}};return Object(m.jsx)(p.Provider,{value:r,children:t.children})},Z=a(53),Q=a.n(Z),X=a(119),W=a(120),K=a(123),tt=a(122),et=a(71),at=a.n(et),ct=a(18),nt=a.n(ct),it=function(t){var e=0;t.item.orders.forEach((function(t){var a=t.amount*t.price;e+=a}));var a=e.toFixed(2);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(X.a,{className:nt.a.orderItem,children:[Object(m.jsx)(W.a,{expandIcon:Object(m.jsx)(at.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(m.jsxs)(tt.a,{children:["Siparis Numarasi: ",t.item.id]})}),Object(m.jsx)(K.a,{children:Object(m.jsxs)(tt.a,{className:nt.a.typo,component:"div",children:[Object(m.jsxs)("div",{className:nt.a.typoLeft,children:[Object(m.jsxs)("div",{className:nt.a.typoLeftOrderOwner,children:["Siparis Veren:",Object(m.jsxs)("span",{children:[" ",t.item.orderOwner]})]}),Object(m.jsx)("div",{className:nt.a.typoLeftMeal,children:Object(m.jsx)("div",{className:nt.a.typoLeftMealIn,children:t.item.orders.map((function(t){return Object(m.jsxs)("div",{className:nt.a.typoLeftMealImDiv,children:[Object(m.jsx)("img",{src:t.altPic}),Object(m.jsxs)("div",{className:nt.a.typeLeftMealDet,children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:nt.a.typeLeftMealDetB,children:t.name}),Object(m.jsxs)("span",{children:["Adet: ",t.amount]})]}),Object(m.jsxs)("span",{className:nt.a.typeLeftMealDetP,children:["$",t.price]})]})]},Math.random())}))})})]}),Object(m.jsxs)("div",{className:nt.a.typoRight,children:[Object(m.jsxs)("div",{className:nt.a.typoRightTotal,children:["Total: ",Object(m.jsxs)("span",{children:["$",a]})]}),Object(m.jsxs)("div",{className:nt.a.typoRightButton,children:[Object(m.jsx)("button",{style:{backgroundColor:"#424242"},onClick:function(){console.log(t.item.id+" teslim edildi")},children:"Teslim Edldi"}),Object(m.jsx)("button",{onClick:function(){console.log(t.item.id+" silindi")},children:"Iptal Et"})]})]})]})})]})})},rt=[{id:"123456",orderOwner:"yavzu",orders:[{name:"tas kebabi",amount:"2",price:"18.99",altPic:"https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg?w=2000"},{name:"Sushi",amount:"1",price:"22.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"}]},{id:"321451",orderOwner:"eminadam",orders:[{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"}]},{id:"421312",orderOwner:"whiteattackalp",orders:[{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"}]},{id:"456789",orderOwner:"pttfixfqx",orders:[{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"}]},{id:"897895",orderOwner:"kralattack",orders:[{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"tavuk izgara",amount:"10",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"},{name:"corba",amount:"1",price:"18.99",altPic:"https://cdn.discordapp.com/attachments/833414619254620260/999681032796241920/zorrtatak.png"}]}],st=Math.ceil(rt.length/2),ot=rt.splice(0,st),dt=rt.splice(-st),lt=function(t){return Object(m.jsx)("section",{className:Q.a.orderMain,children:Object(m.jsxs)(D,{style:{height:"100%",display:"flex",overflow:"auto"},children:[Object(m.jsx)("div",{className:Q.a.firstDiv,children:ot.map((function(t){return Object(m.jsx)(it,{item:t},t.id)}))}),Object(m.jsx)("div",{className:Q.a.secondDiv,children:dt.map((function(t){return Object(m.jsx)(it,{item:t},t.id)}))})]})})},mt=a(61),ut=a(72),pt=function(t){var e=arguments;return Object(ut.a)(Object(mt.a)().mark((function a(){var c;return Object(mt.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=e.length>1&&void 0!==e[1]?e[1]:{},a.abrupt("return",fetch("https://react-foodorder/".concat(t),{method:"post",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(c)}));case 2:case"end":return a.stop()}}),a)})))()};function jt(t,e){return"ADD_TO_CART"===e.type?Object(r.a)(Object(r.a)({},t),{},{cart:e.value}):t}var bt=function(){var t=Object(s.useState)(!0),e=Object(i.a)(t,2),a=e[0],c=e[1],n=Object(s.useState)(!1),r=Object(i.a)(n,2),o=r[0],d=r[1],l=Object(s.useState)(!1),u=Object(i.a)(l,2),p=u[0],j=u[1],b=Object(s.useState)([{name:"choc",id:"ca1"},{name:"anan",id:"ca2"},{name:"baban",id:"ca3"},{name:"deden",id:"ca4"},{name:"cocuk",id:"ca5"}]),h=Object(i.a)(b,2),O=h[0],_=h[1],f=Object(s.useState)(!1),g=Object(i.a)(f,2),v=g[0],y=g[1],N=Object(s.useReducer)(jt,{cart:[]}),C=Object(i.a)(N,2),k=C[0],S=C[1],I=function(){c(!0),pt("exit_focus",{})};return window.addEventListener("keydown",(function(t){"Escape"===t.key&&I()})),window.addEventListener("message",(function(t){var e=t.data.type;"SHOW_PAGE"===e?(console.log(JSON.stringify(t.data.meals)),console.log(JSON.stringify(t.data.category)),S({type:"ADD_TO_CART",value:t.data.meals}),_(t.data.category),j(t.data.job),y(t.data.job),c(!1)):"CLOSE_PAGE"===e&&I()})),Object(m.jsx)("div",{style:{display:a?"none":"block",width:"100%",height:"100%"},children:Object(m.jsxs)(q,{hidden:a,children:[Object(m.jsx)(x,{onShowOrder:function(){j(!p)},onShowCart:function(){d(!0)},employe:v}),Object(m.jsx)("main",{children:p?Object(m.jsx)(lt,{}):Object(m.jsx)(G,{category:O,meals:k.cart,cartOnClose:function(){d(!1)},cartIsShown:o})})]})})};n.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(bt,{}))}},[[96,1,2]]]);
//# sourceMappingURL=main.9eefabb7.chunk.js.map