/* Mede Code */

let gorgButton = document.getElementById("felgorgGomb");
let openMD = false;
let openSpec = true;
let switchOnL = true;
let swapOnL = true;
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

function FelkAkcSwitch(LorR){
  if (swapOnL && LorR == 'R') {
    document.getElementById("leftWideCont").style.display = "none";
    document.getElementById("wideSwitchL").style.background = "#23BBFF";
    document.getElementById("wideSwitchL").style.cursor = "pointer"

    document.getElementById("rightWideCont").style.display = "flex";
    document.getElementById("wideSwitchR").style.background = "#1A0935";
    document.getElementById("wideSwitchR").style.cursor = "default"

    if (window.innerWidth < 576) {
      document.getElementById("wideSwitchR").style.order = 0;
      document.getElementById("wideSwitchL").style.order = 1;
    }

    swapOnL = false;
  }
  else if(!swapOnL && LorR == 'L'){
    document.getElementById("leftWideCont").style.display = "flex";
    document.getElementById("wideSwitchL").style.background = "#1A0935";
    document.getElementById("wideSwitchL").style.cursor = "default"

    document.getElementById("rightWideCont").style.display = "none";
    document.getElementById("wideSwitchR").style.background = "#23BBFF";
    document.getElementById("wideSwitchR").style.cursor = "pointer"

    if (window.innerWidth < 576) {
      document.getElementById("wideSwitchR").style.order = 1;
      document.getElementById("wideSwitchL").style.order = 0;
    }

    swapOnL = true;
  }
}

function closeParent(event){
  let par = event.parentElement;
  par.parentElement.style.opacity = "0";
}

function reopenParent(event){
  let par = event.parentElement;
  par.parentElement.style.opacity = "1";
}



/* Gyutai code */

let currentImage = 1; 
function changeImage(imageNumber) {
    currentImage = imageNumber;
    document.getElementById('image-js-smth').src = `images/proba_kep${imageNumber}.png`;
}

const imgElement = document.getElementById('image-js-smth');

if(currentImage=1)
{
  document.getElementById("iframe-kep").src = "Ajanlatok.html";
}
else if(currentImage = 2)
{
  document.getElementById("iframe-kep").src = "sorsolas.html";
}
else if(currentImage = 3)
{
  document.getElementById("iframe-kep").src = "Osszehasonlitas.html";
}
else if(currentImage = 4)
{
  document.getElementById("iframe-kep").src = "Konyvtar.html";
}

imgElement.addEventListener("mouseenter", function() {
    imgElement.src = `images/proba_kep${currentImage}_tutorial.png`;
});

imgElement.addEventListener("mouseleave", function() {
    imgElement.src = `images/proba_kep${currentImage}.png`;
});