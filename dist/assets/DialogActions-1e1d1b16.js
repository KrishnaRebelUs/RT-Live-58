import{_ as a,r as g,a as p,b as u,j as d}from"./index-527674d4.js";import{g as f,a as m,s as x,d as D,e as A}from"./Box-71d1ebd7.js";function y(s){return f("MuiDialogActions",s)}m("MuiDialogActions",["root","spacing"]);const S=["className","disableSpacing"],b=s=>{const{classes:t,disableSpacing:o}=s;return A({root:["root",!o&&"spacing"]},y,t)},C=x("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:o}=s;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:s})=>a({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!s.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),j=g.forwardRef(function(t,o){const e=p({props:t,name:"MuiDialogActions"}),{className:n,disableSpacing:l=!1}=e,c=u(e,S),i=a({},e,{disableSpacing:l}),r=b(i);return d.jsx(C,a({className:D(r.root,n),ownerState:i,ref:o},c))}),M=j;export{M as D};
