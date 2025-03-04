
  document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".fa-search");
  const searchBar = document.createElement("div");

  searchBar.className = "search-bar";
  searchBar.innerHTML = '<input type="text" placeholder="Search...">';
  
  // Insert search bar inside the middle-bar
  const middleBar = document.querySelector(".middle-bar");
  middleBar.appendChild(searchBar);

  searchIcon.addEventListener("click", () => {
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
      searchBar.style.display = "block";
    } else {
      searchBar.style.display = "none";
    }
  });
});
