import{a as g,b as T,T as M,i as N}from"./router.C-7yY8nH.js";const m="div.main-frame",R=`${m} main`,q="data-mobile-menu-expanded",v="starlight-menu-button",s="nav.sidebar",i=`${s} .sidebar-content`;function y(e){const t=E(e.href),a=t.split(""),n=document.querySelectorAll(`${i} a`);if(n.length===0)return null;const o=[...n],l=o.map(r=>E(new URL(r.href,location.href).href));return o[l.map(r=>r.split("").findIndex((c,d)=>c!==a[d])).map((r,c)=>r!==-1?r:Math.min(t.length,l[c].length)+(t.length===l[c].length?1:0)).reduce((r,c,d,A)=>c>A[r]?d:r,0)];function E(r){return r.replace(/\/#/,"#").replace(/\/$/,"")}}function w(){document.querySelectorAll(`${i} [aria-current="page"]`)?.forEach(e=>e.removeAttribute("aria-current"))}function C(e){w(),y(e)?.setAttribute("aria-current","page")}function b(e,t=!0){const a=e?y(e):document.querySelector(`${i} [aria-current="page"]`);let n=a?.closest("details");for(;n;)n.open=!0,n=n.parentElement?.closest("details");t&&a?.scrollIntoView({block:"center",behavior:"instant"})}const I="vtbot-starlight-replace-sidebar-content",_="vtbot-starlight-retain-current-page-marker",h=()=>({replaceSidebarContent:document.querySelector(`head meta[name="${I}"]`),retainCurrentPageMarker:document.querySelector(`head meta[name="${_}"]`),mainTransitionScope:document.querySelector('head meta[name="vtbot-main-transition-scope"]')?.content});let{replaceSidebarContent:p,retainCurrentPageMarker:f,mainTransitionScope:u}=h();b();function k(e){S(document),S(e.newDocument),O(),B(e),!p&&!f&&C(e.to)}function P(e){D(e),!f&&b()}function O(){document.body.hasAttribute(q)&&document.body.querySelector(v)?.closest("nav")?.dispatchEvent(new KeyboardEvent("keyup",{key:"Escape",code:"Escape",charCode:27,keyCode:27,shiftKey:!1,ctrlKey:!1,altKey:!1,metaKey:!1}))}function S(e){e.body.querySelector(m)?.setAttribute("data-vtbot-replace","main")}function B(e){if(!u)return;t(document,u),t(e.newDocument,u);function t(a,n){const o=a.querySelector(R);o&&(o.dataset.astroTransitionScope=n)}}function D(e){const t=e.newDocument.querySelector(s);if(!t)document.querySelector(s)?.remove();else{const a=document.querySelector(s);if(!a)document.querySelector(m)?.insertAdjacentElement("beforebegin",t);else if(p){const n=a.querySelector(i),o=t.querySelector(i);n&&o?n.replaceWith(o):a.replaceWith(t)}}}document.addEventListener(g,e=>{if({replaceSidebarContent:p,retainCurrentPageMarker:f,mainTransitionScope:u}=h(),T(e)){const t=e.loader;e.loader=async()=>{await t(),k(e)}}});document.addEventListener(M,e=>{if(N(e)){const t=e.swap;e.swap=()=>{t(),P(e)}}});export{I as REPLACE_SIDEBAR_CONTENT,_ as RETAIN_CURRENT_PAGE_MARKER};
