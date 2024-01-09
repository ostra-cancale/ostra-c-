window.addEventListener("scroll", () => {
    let menuDeux = document.querySelectorAll(".secondnav")[0];
    let scroll = window.scrollY;
    let hauteur = 300;
    if (scroll >= 200) {
      menuDeux.style.visibility = "visible";
      menuDeux.style.opacity = "100%";
    } else {
      menuDeux.style.visibility = "hidden";
      menuDeux.style.opacity = "0%";
    }
    });
    

  