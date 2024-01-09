const buttonT = document.querySelector(".buttonTrain");
const contenerButtonT = document.querySelector(".contenerTrain");

const buttonC = document.querySelector(".buttonCar");
const contenerButtonC = document.querySelector(".contenerCar");

const buttonB = document.querySelector(".buttonBus");
const contenerButtonB = document.querySelector(".contenerBus");

const plusIcon1 = document.querySelector(".plus1");
const plusIcon2 = document.querySelector(".plus2");
const plusIcon3 = document.querySelector(".plus3");
const moinsIcon1 = document.querySelector(".moins1");
const moinsIcon2 = document.querySelector(".moins2");
const moinsIcon3 = document.querySelector(".moins3");

buttonT.addEventListener("click", () => {
  if (getComputedStyle(contenerButtonT).display != "none") {
    contenerButtonT.style.display = "none";
    plusIcon2.style.display = "flex";
   // moinsIcon2.style.display = "none";
  } else {
    contenerButtonT.style.display = "flex";
    contenerButtonC.style.display = "none";
    contenerButtonB.style.display = "none";
   // plusIcon2.style.display = "none";
   // moinsIcon2.style.display = "flex";
  }
});

// document.getElementsByClassName(".contenerTrain").style.transitionDuration = "all 5s";

buttonC.addEventListener("click", () => {
  if (getComputedStyle(contenerButtonC).display != "none") {
    contenerButtonC.style.display = "none";
    plusIcon1.style.display = "flex";
    // moinsIcon1.style.display = "none";
  } else {
    contenerButtonC.style.display = "flex";
    contenerButtonT.style.display = "none";
    contenerButtonB.style.display = "none";
    //plusIcon1.style.display = "none";
    // moinsIcon1.style.display = "flex";

  }
});


buttonB.addEventListener("click", () => {
  if (getComputedStyle(contenerButtonB).display != "none") {
    contenerButtonB.style.display = "none";
    plusIcon3.style.display = "flex";
   // moinsIcon3.style.display = "none";
  } else {
    contenerButtonB.style.display = "flex";
    contenerButtonT.style.display = "none";
    contenerButtonC.style.display = "none";
    //plusIcon3.style.display = "none";
    //moinsIcon3.style.display = "flex";
  }
});

