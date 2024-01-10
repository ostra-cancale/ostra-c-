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
const appartpresFra = document.querySelector(".appartpres");
const appartpresEng = document.querySelector(".appartpresEn");
const apparttitleEng = document.querySelector(".apparttitleEn");
const apparttitleFra = document.querySelector(".apparttitle");
const privateParkEng = document.querySelector("#privateParkEn");
const privateParkFra = document.querySelector("#privateParkFr");
const bigButtonEng = document.querySelector(".bigButtonEn");
const bigButtonFra = document.querySelector(".bigButton");

const apparttitle2Eng = document.querySelector(".apparttitle2En");
const apparttitle2Fra = document.querySelector(".apparttitle2");


const dlEng = document.querySelector("#dlEn");
const dlFra = document.querySelector("#dlFr");




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


  buttonLangChange.addEventListener("click", () => {
    if (getComputedStyle(appartpresEng).display != "none") {
      appartpresEng.style.display = "none";
      appartpresFra.style.display = "flex";
    } else {
      appartpresEng.style.display = "flex";
      appartpresFra.style.display = "none";
    }
  });
  


  buttonLangChange.addEventListener("click", () => {
    if (getComputedStyle(apparttitleEng).display != "none") {
      apparttitleEng.style.display = "none";
      apparttitleFra.style.display = "flex";
    } else {
      apparttitleEng.style.display = "flex";
      apparttitleFra.style.display = "none";
    }
  });



  buttonLangChange.addEventListener("click", () => {
    if (getComputedStyle(privateParkEng).display != "none") {
      privateParkEng.style.display = "none";
      privateParkFra.style.display = "flex";
    } else {
      privateParkEng.style.display = "flex";
      privateParkFra.style.display = "none";
    }
  });

  buttonLangChange.addEventListener("click", () => {
    if (getComputedStyle(bigButtonEng).display != "none") {
      bigButtonEng.style.display = "none";
      bigButtonFra.style.display = "flex";
    } else {
      bigButtonEng.style.display = "flex";
      bigButtonFra.style.display = "none";
    }
  });

  buttonLangChange.addEventListener("click", () => {
    if (getComputedStyle(apparttitle2Eng).display != "none") {
      apparttitle2Eng.style.display = "none";
      apparttitle2Fra.style.display = "flex";
    } else {
      apparttitle2Eng.style.display = "flex";
      apparttitle2Fra.style.display = "none";
    }
  });


  buttonLangChange.addEventListener("click", () => {
    if (getComputedStyle(dlEng).display != "none") {
      dlEng.style.display = "none";
      dlFra.style.display = "flex";
    } else {
     dlEng.style.display = "flex";
      dlFra.style.display = "none";
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
  