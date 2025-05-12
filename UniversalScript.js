let gorgButton = document.getElementById("felgorgGomb");
let openMD = false;
let openSpec = true;
let switchOnL = true;
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


function OpenCloseSpecMenu(LorR) {
  if (openSpec) {
      document.getElementById("MinRecCont"+LorR).style.display = "flex";
      MinRecBtn = document.getElementById("MinRecButtonSVG"+LorR);
      MinRecBtn.style.animation = "halfSpinForw 0.5s linear 1 forwards";
      openSpec = false;
  }
  else{
      document.getElementById("MinRecCont"+LorR).style.display = "none";
      MinRecBtn = document.getElementById("MinRecButtonSVG"+LorR);
      MinRecBtn.style.animation = "halfSpinBack 0.5s linear 1 forwards";
      openSpec = true;
  }
}

function SwitchLeftToRight(LorR) {
  if (switchOnL && LorR == 'R') 
  {
    document.getElementById("MinRecCont"+LorR).style.display = "none";
    MinRecBtn = document.getElementById("MinRecButtonSVG"+LorR);
    MinRecBtn.style.animation = "halfSpinBack 0.5s linear 1 forwards";
    openSpec = true;

    hasonR = document.getElementById("hasonRight")
    hasonR.style.display = "block";
    hasonL = document.getElementById("hasonLeft")
    hasonL.style.display = "none";

    switchOnL = false;
  }
  else if (!switchOnL && LorR == 'L')
  {
    document.getElementById("MinRecCont"+LorR).style.display = "none";
    MinRecBtn = document.getElementById("MinRecButtonSVG"+LorR);
    MinRecBtn.style.animation = "halfSpinBack 0.5s linear 1 forwards";
    openSpec = true;

    hasonR = document.getElementById("hasonRight")
    hasonR.style.display = "none";
    hasonL = document.getElementById("hasonLeft")
    hasonL.style.display = "block";

    switchOnL = true;
  }
}