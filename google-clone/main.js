const searchAll = document.querySelector("a.active");
const searchImages = document.querySelector("a.inactive");


function clickSearchAll() {
    searchAll.classList.add("active");
    searchAll.classList.remove("inactive");    
    searchImages.classList.add("inactive");
    searchImages.classList.remove("active");
}

function clickSearchImages() {
    searchImages.classList.add("active");
    searchImages.classList.remove("inactive");
    searchAll.classList.add("inactive");
    searchAll.classList.remove("active");    
}

searchAll.addEventListener("click", clickSearchAll)
searchImages.addEventListener('click',clickSearchImages);