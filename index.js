import{a as v,i as u,S as m}from"./assets/vendor-Qob_5Ba8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const b="https://pixabay.com/api/",w="46814382-75c1b20cf6e14c25ef5bdd9a6";async function p(o,t,s){const{data:i}=await v.get(`${b}`,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:s}});return i}function f(o){return o.map(({webformatURL:t,largeImageURL:s,tags:i,likes:e,views:r,comments:c,downloads:L})=>`<div class="gallery">
        <a class="photo-link" href="${s}">
                <img class="photo" src="${t}" alt="${i} width="360">
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
                <p class ="item-text">${c}</p>
         </li>
         <li class="item-text">
                <h2 class="item-title">Downloads</h2>
                <p class ="item-text">${L}</p>
         </li>
     </ul>
     </div>
        `).join("")}const g=document.querySelector(".form-search"),h=document.querySelector(".js-gallery"),l=document.querySelector(".loader"),a=document.querySelector(".btn-load-more");g.addEventListener("submit",q);a.addEventListener("click",()=>S(g.elements.query.value.trim()));let n,d=1;const y=15;async function q(o){o.preventDefault(),d=1,l.style.display="block",h.innerHTML="";const t=o.target.elements.query.value.trim();if(a.classList.add("visually-hidden"),t===""){u.show({title:"Error",message:"Sorry, you need to enter data for the request. Please try again!",position:"topRight",color:"red"}),l.style.display="none";return}await p(t,d,y).then(({hits:s})=>{if(s.length===0||s.length<y){u.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),l.style.display="none",a.classList.add("visually-hidden");return}h.insertAdjacentHTML("beforeend",f(s)),l.style.display="none",a.classList.remove("visually-hidden"),n?n.refresh():n=new m(".gallery a")}).catch(s=>{console.log(s),u.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"})})}async function S(o){d++,a.classList.add("visually-hidden"),l.style.display="block";try{const{hits:t,totalHits:s}=await p(o,d,y);h.insertAdjacentHTML("beforeend",f(t)),n&&n.destroy(),n=new m(".gallery a"),a.classList.remove("visually-hidden"),d*y>=s&&(a.classList.add("visually-hidden"),u.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"}));const e=document.querySelector(".gallery").getBoundingClientRect().height;window.scrollBy({left:0,top:e*2,behavior:"smooth"})}catch(t){console.log(t)}finally{l.style.display="none"}}
//# sourceMappingURL=index.js.map
