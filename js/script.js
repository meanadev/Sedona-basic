var searchTitle = document.querySelector(".search-title");
var searchFormShow = document.querySelector(".search-field");

document.querySelector(".search-field").classList.remove("search-field-show");
document.querySelector(".search-field").classList.add("search-field-hide");

searchTitle.onclick = function () {
  searchFormShow.classList.toggle('search-field-show');
  searchFormShow.classList.toggle('search-field-hide');
};