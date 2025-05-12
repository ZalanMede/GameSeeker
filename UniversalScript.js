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


function OpenCloseMDSMMenu() {
  if (openMD)
  {
    if (!(document.documentElement.clientWidth < 576))
    {
      document.getElementById("overlayMD").style.height = "0%";
      document.getElementById("opencloseOverlaySVG");
      opencloseOverlaySVG.style.animation = "quarterSpinBack 0.5s linear 1 forwards";
    }
    else
    {
      document.getElementById("overlaySM").style.height = "0%";
      document.getElementById("opencloseOverlaySVG_SM");
      opencloseOverlaySVG_SM.style.animation = "halfSpinBack 0.5s linear 1 forwards";
    }
    openMD = false;
  }
  else
  {
    if (!(document.documentElement.clientWidth < 576))
    {
      document.getElementById("overlayMD").style.height = "100%";
      document.getElementById("opencloseOverlaySVG");
      opencloseOverlaySVG.style.animation = "quarterSpinForw 0.5s linear 1 forwards";
    }
    else
    {
      document.getElementById("overlaySM").style.height = "100%";
      document.getElementById("opencloseOverlaySVG_SM");
      opencloseOverlaySVG_SM.style.animation = "halfSpinForw 0.5s linear 1 forwards";
    }
    openMD = true;
  }
}