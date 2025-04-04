let gorgButton = document.getElementById("felgorgGomb");
let openMD = false;
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    gorgButton.style.display = "flex";
  } else {
    gorgButton.style.display = "none";
  }
}

function scrollToTop() {
    window.scrollTo(0, 0);
}


function OpenCloseMDMenu() {
  if (openMD)
  {
    document.getElementById("overlayMD").style.height = "0%";
    document.getElementById("opencloseOverlay");
    opencloseOverlay.style.animation = "quarterSpin 0.5s linear 1 backwards";
    openMD = false;
  }
  else
  {
    document.getElementById("overlayMD").style.height = "100%";
    document.getElementById("opencloseOverlay");
    opencloseOverlay.style.animation = "quarterSpin 0.5s linear 1 forwards";
    openMD = true;
  }
}