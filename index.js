import{a as L,i as d,S as v}from"./assets/vendor-Qob_5Ba8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const b="https://pixabay.com/api/",q="46814382-75c1b20cf6e14c25ef5bdd9a6";async function m(o,t,r){const{data:i}=await L.get(`${b}`,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:r}});return i}function p(o){return o.map(({webformatURL:t,largeImageURL:r,tags:i,likes:e,views:s,comments:l,downloads:g})=>`<div class="gallery">
        <a class="photo-link" href="${r}">
                <img class="photo" src="${t}" alt="${i} width="360">
        </a>
        <ul class="list-item">
           <li class="item-text">
                <h2 class="item-title">Likes</h2>
                <p class ="item-text">${e}</p>
           </li>
          <li class="item-text">
                <h2 class="item-title">Views</h2>
                <p class ="item-text">${s}</p>
          </li>
         <li class="item-text">
                <h2 class="item-title">Comments</h2>
                <p class ="item-text">${l}</p>
         </li>
         <li class="item-text">
                <h2 class="item-title">Downloads</h2>
                <p class ="item-text">${g}</p>
         </li>
     </ul>
     </div>
        `).join("")}const f=document.querySelector(".form-search"),h=document.querySelector(".js-gallery"),n=document.querySelector(".loader"),a=document.querySelector(".btn-load-more");f.addEventListener("submit",w);a.addEventListener("click",()=>S(f.elements.query.value.trim()));let u,c=1;const y=15;async function w(o){o.preventDefault(),c=1,n.style.display="block",h.innerHTML="";const t=o.target.elements.query.value.trim();if(a.classList.add("visually-hidden"),t===""){d.show({title:"Error",message:"Sorry, you need to enter data for the request. Please try again!",position:"topRight",color:"red"}),n.style.display="none";return}await m(t,c,y).then(({hits:r})=>{r.length===0&&(a.classList.add("visually-hidden"),d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})),h.insertAdjacentHTML("beforeend",p(r)),n.style.display="none",a.classList.remove("visually-hidden"),u?u.refresh():u=new v(".gallery a")}).catch(r=>{console.log(r),d.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})})}async function S(o){c++,a.classList.add("visually-hidden"),n.style.display="block";try{const{hits:t,totalHits:r}=await m(o,c,y);h.insertAdjacentHTML("beforeend",p(t)),a.classList.remove("visually-hidden"),c*y>=r&&(a.classList.add("visually-hidden"),d.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"}));const e=document.querySelector(".gallery").getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})}catch(t){console.log(t)}finally{n.style.display="none"}}
//# sourceMappingURL=index.js.map
