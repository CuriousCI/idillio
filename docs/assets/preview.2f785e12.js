import{w as s,a as m,S as v,b as c}from"./iframe.b39018d4.js";import{m as u}from"./make-decorator.3769f4d4.js";var k="links",f=s.document,L=s.HTMLElement,p=function(e){return m.getChannel().emit(c,e)},l=function(e){var n=e.target;if(n instanceof L){var d=n,r=d.dataset,i=r.sbKind,o=r.sbStory;(i||o)&&(e.preventDefault(),p({kind:i,story:o}))}},a=!1,h=function(){a||(a=!0,f.addEventListener("click",l))},E=function(){a&&(a=!1,f.removeEventListener("click",l))},w=u({name:"withLinks",parameterName:k,wrapper:function(e,n){return h(),m.getChannel().once(v,E),e(n)}});module&&module.hot&&module.hot.decline&&module.hot.decline();var T=[w];export{T as decorators};
//# sourceMappingURL=preview.2f785e12.js.map
