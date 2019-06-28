const nav = document.querySelector("nav");
const navButton = document.querySelector(".menu-icon");
const navbar1 = document.querySelector(".bar-1");
const navbar2 = document.querySelector(".bar-2");
const navbar3 = document.querySelector(".bar-3");

let navOpened = false;

let openMenu = () => {
  if (!navOpened) {
    nav.className = "nav-open";
    navbar1.className = "bar bar-open-1";
    navbar2.className = "bar bar-open-2";
    navbar3.className = "bar bar-open-3";
    navOpened = true;
  } else {
    nav.className = "";
    navbar1.className = "bar bar-close-1";
    navbar2.className = "bar bar-close-2";
    navbar3.className = "bar bar-close-3";
    navOpened = false;
  }
};

navButton.addEventListener("click", openMenu);

//
//
//
//
//

let genreLink = document.querySelectorAll(".janr-link");
let genres = document.querySelectorAll(".janr");
console.log(genres[0]);
console.log(genreLink[0].value);
function swittch(value) {
  if (this.id == value) {
    this.className = "works";
  }
}

genreLink.forEach(function(el) {
  el.addEventListener("click", function(event) {
    genres.forEach(genre => {
      const genreId = "janr-link " + genre.id;
      if (genreId == event.target.className) {
        genre.className = "works";
      } else {
        genre.className = "none";
      }
    });
  });
});
// genreLink.forEach(function(el) {
//   el.addEventListener("click", function(event) {
//     for (let i = 0; i < genres.length; i++) {
//       const genre = genres[i];
//       const genreId = "janr-link " + genre.id;

//       if (genreId == event.target.className) {
//         genre.className = "works";
//       } else {
//         genre.className = "none";
//       }
//     }
//   });
// });
