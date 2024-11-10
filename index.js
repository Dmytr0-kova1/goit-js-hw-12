import{a as f,i as c,S as g}from"./assets/vendor-Qob_5Ba8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const b="https://pixabay.com/api/",L="46814382-75c1b20cf6e14c25ef5bdd9a6";async function y(t,o){const{data:s}=await f(`${b}`,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});return s}function m(t){return t.map(({webformatURL:o,largeImageURL:s,tags:l,likes:e,views:r,comments:a,downloads:p})=>`<div class="gallery">
        <a class="photo-link" href="${s}">
                <img class="photo" src="${o}" alt="${l} width="360">
        </a>
        <ul class="list-item">
           <li class="item-text">
                <h2 class="item-title">Likes</h2>
                <p class ="item-text">${e}</p>
           </li>
          <li class="item-text">
                <h2 class="item-title">Views</h2>
                <p class ="item-text">${r}</p>
          </li>
         <li class="item-text">
                <h2 class="item-title">Comments</h2>
                <p class ="item-text">${a}</p>
         </li>
         <li class="item-text">
                <h2 class="item-title">Downloads</h2>
                <p class ="item-text">${p}</p>
         </li>
     </ul>
     </div>
        `).join("")}const w=document.querySelector(".form-search"),h=document.querySelector(".js-gallery"),n=document.querySelector(".loader"),i=document.querySelector(".btn-load-more");w.addEventListener("submit",v);i.addEventListener("click",x);let u,d=1;const S=15,q="";function v(t){t.preventDefault(),n.style.display="block";const o=t.target.elements.query.value.trim();if(d=1,h.innerHTML="",o===""){c.show({title:"Error",message:"Sorry, you need to enter data for the request. Please try again!",position:"topRight",color:"red"}),n.style.display="none";return}y(o).then(s=>{if(s.hits.length===0){c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}h.innerHTML=m(s.hits),n.style.display="none",i.classList.remove("visually-hidden"),u?u.refresh():u=new g(".gallery a")}).catch(s=>{console.log(s),c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})})}async function x(){d++,i.disabled=!0,i.style.display="none",n.style.display="block";try{const t=await y(q,d);h.insertAdjacentHTML("beforeend",m(t.hits));let o=Math.ceil(t.totalHits/S);(t.hits.length===0||d>=o)&&(i.classList.add("visually-hidden"),c.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"}));const l=document.querySelector(".gallery").getBoundingClientRect().height;window.scrollBy({left:0,top:l*2,behavior:"smooth"})}catch(t){console.log(t)}finally{n.style.display="none",i.style.display="block",i.disabled=!1}}
//# sourceMappingURL=index.js.map
