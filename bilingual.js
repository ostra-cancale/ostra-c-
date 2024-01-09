const buttonLangChange = document.getElementById('english');
const navFra = document.getElementById("firstnav");
const navEng = document.getElementById('firstnavEn');
const nav2Fra = document.getElementById("secondnav");
const nav2Eng = document.getElementById("secondnavEn");
const attractFra = document.getElementById("attract");
const attractEng = document.getElementById("attractEn");
const buttonbookFra = document.getElementById("buttonbookFr");
const buttonbookEng = document.getElementById("buttonbookEn");
const prestextFra = document.getElementById("presentationtext");
const prestextEng = document.getElementById("presentationtextEn");



buttonLangChange.addEventListener("click", () => {
  if (getComputedStyle(navEng).display != "none") {
    navEng.style.display = "none";
    navFra.style.display = "flex";
    nav2Eng.style.display = "none";
    nav2Fra.style.display = "flex";
  } else {
    navEng.style.display = "flex";
    navFra.style.display = "none";
    nav2Eng.style.display = "flex";
    nav2Fra.style.display = "none";
  }
});

buttonLangChange.addEventListener("click", () => {
    if (getComputedStyle(attractEng).display != "none") {
      attractEng.style.display = "none";
      attractFra.style.display = "flex";
    } else {
      attractEng.style.display = "flex";
      attractFra.style.display = "none";
    }
  });

  buttonLangChange.addEventListener("click", () => {
    if (getComputedStyle(buttonbookEng).display != "none") {
      buttonbookEng.style.display = "none";
      buttonbookFra.style.display = "flex";
    } else {
        buttonbookEng.style.display = "flex";
        buttonbookFra.style.display = "none";
    }
  });

  buttonLangChange.addEventListener("click", () => {
    if (getComputedStyle(prestextEng).display != "none") {
        prestextEng.style.display = "none";
        prestextFra.style.display = "flex";
    } else {
        prestextEng.style.display = "flex";
        prestextFra.style.display = "none";
    }
  });



// buttonLangFr.addEventListener("click", () => {
//     if (getComputedStyle(navEng).display != "none") {
//       navEng.style.display = "none";
//       navFra.style.display = "flex";
  
//     } else {
//       navEng.style.display = "flex";
//       navFra.style.display = "none";
//     }
//   });
  