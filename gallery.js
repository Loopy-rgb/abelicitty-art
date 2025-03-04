document.addEventListener("DOMContentLoaded", function () {
  showPage(1); 
});

function showPage(pageNumber) {
  console.log("Switching to page: " + pageNumber); 

  let pages = document.querySelectorAll('.art-page');

  pages.forEach(page => {
      page.style.opacity = "0";
      page.style.transform = "scale(1)";
  });

  setTimeout(() => {
      pages.forEach(page => page.style.display = "none"); 

      let activePage = document.getElementById("page" + pageNumber);
      if (activePage) {
          activePage.style.display = "block"; 

          setTimeout(() => {
              activePage.style.opacity = "1";
              activePage.style.transform = "scale(1)";
          }, 50);
      } else {
          console.error("Page not found: " + pageNumber);
      }
  }, 500); 
}
