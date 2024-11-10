import fetchData from "./js/pixabay-api";
import createMarkup from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.querySelector(".form-search");
const gallery = document.querySelector(".js-gallery");
const loader = document.querySelector(".loader");
const loadMore = document.querySelector(".btn-load-more")

form.addEventListener("submit", querySearch);
loadMore.addEventListener("click", onLoadMore);

let lightbox;
let currentPage = 1;
const perPage = 15;
const inputVal = "";

function querySearch(event) {
    event.preventDefault();
    loader.style.display = "block";
    const inputVal = event.target.elements.query.value.trim();
    currentPage = 1;
    gallery.innerHTML = "";

    if (inputVal === "") {
          iziToast.show({
            title: "Error",
            message:  "Sorry, you need to enter data for the request. Please try again!",
            position: "topRight",
            color: "red"
          })
        loader.style.display = "none";
        return;
    }

    fetchData(inputVal)
        .then((response) => {
            if (response.hits.length === 0) {
                iziToast.show({
            title: "Error",
            message:  "Sorry, there are no images matching your search query. Please try again!",
            position: "topRight",
            color: "red"
                })
                return;
            }
            
            gallery.innerHTML = createMarkup(response.hits);
            loader.style.display = "none";
            loadMore.classList.remove("visually-hidden");

            if (lightbox) {
                lightbox.refresh();
            } else {
                lightbox = new SimpleLightbox(".gallery a"); 
            }            
        })
        .catch(error => {
            console.log(error);

            iziToast.show({
                title: "Error",
                message:  "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
                color: "red"
            })
        })
}

async function onLoadMore() {
    currentPage++;
    loadMore.disabled = true;
    loadMore.style.display = "none";
    loader.style.display = "block";

    try {
        const data = await fetchData(inputVal, currentPage);
        gallery.insertAdjacentHTML("beforeend", createMarkup(data.hits));

       let totalPages = Math.ceil(data.totalHits / perPage);

        if (data.hits.length === 0 || currentPage >= totalPages) {
            loadMore.classList.add("visually-hidden");
            iziToast.show({
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight",
                color: "blue"
            })
        }
        const card = document.querySelector(".gallery");
        const cardHeight = card.getBoundingClientRect().height;
        
        window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: "smooth"
        })
    } catch (error) {
        console.log(error);
    } finally {
        loader.style.display = "none";
        loadMore.style.display = "block";
        loadMore.disabled = false;
    }
}


