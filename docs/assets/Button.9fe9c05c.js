import{S as m,i as p,s as h,r as g,u as _,v,w,x as C,d as c,y as u,a as B,z,A as V,B as j,q as d,C as q}from"./index.a8a75659.js";function x(n){let t,i,a,l,r;return{c(){t=g("button"),i=_(n[1]),this.h()},l(e){t=v(e,"BUTTON",{type:!0,class:!0,style:!0});var s=w(t);i=C(s,n[1]),s.forEach(c),this.h()},h(){u(t,"type","button"),u(t,"class",a=["storybook-button",`storybook-button--${n[0]}`,n[2]].join(" ")),u(t,"style",n[3])},m(e,s){B(e,t,s),z(t,i),l||(r=V(t,"click",n[4]),l=!0)},p(e,[s]){s&2&&j(i,e[1]),s&1&&a!==(a=["storybook-button",`storybook-button--${e[0]}`,e[2]].join(" "))&&u(t,"class",a)},i:d,o:d,d(e){e&&c(t),l=!1,r()}}}function E(n,t,i){let{primary:a=!1}=t,{backgroundColor:l}=t,{size:r="medium"}=t,{label:e=""}=t,s=a?"storybook-button--primary":"storybook-button--secondary",b=l?`background-color: ${l}`:"";const k=q();function f(o){k("click",o)}return n.$$set=o=>{"primary"in o&&i(5,a=o.primary),"backgroundColor"in o&&i(6,l=o.backgroundColor),"size"in o&&i(0,r=o.size),"label"in o&&i(1,e=o.label)},[r,e,s,b,f,a,l]}class y extends m{constructor(t){super(),p(this,t,E,x,h,{primary:5,backgroundColor:6,size:0,label:1})}}const T=y;y.__docgen={version:3,name:"Button.svelte",data:[{keywords:[],visibility:"public",description:"Is this the principal call to action on the page?",name:"primary",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"What background color to use",name:"backgroundColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[],visibility:"public",description:"How large should the button be?",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"medium"},{keywords:[],visibility:"public",description:"Button contents",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"click"}],slots:[],refs:[]};export{T as B};
//# sourceMappingURL=Button.9fe9c05c.js.map
