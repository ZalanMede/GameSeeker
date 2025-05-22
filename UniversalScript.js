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
    const iframe = document.getElementById("iframe-kep");

    switch (currentImage) {
        case 1:
            iframe.src = "Ajanlatok.html";
            break;
        case 2:
            iframe.src = "sorsolas.html";
            break;
        case 3:
            iframe.src = "Osszehasonlitas.html";
            break;
        case 4:
            iframe.src = "Konyvtar.html";
            break;
    }
}

// Hover események kezelése
const iframeElement = document.getElementById("iframe-kep");
const overlay = document.getElementById("iframe-overlay");

iframeElement.addEventListener("mouseenter", () => {
    let message = "";
    switch (currentImage) {
        case 1:
            message = `Ez itt az ajánlatok oldal<br><br>
                Ezen az oldalon találhatsz olyan játékokat, amiket mi ajánlunk neked.<br><br>
                Ha a kurzorod ráviszed egy játékra, több információt tudhatsz meg róla.`;
            break;
        case 2:
            message = `Ez itt a sorsolás oldal<br><br>
                Ezen az oldalon sorsolhatod ki hogy melyik játékot játszd következőnek.<br><br>
                A jobb oldalon láthatod a könyvtárban tárolt játékaidat. <br><br>
                Amelyik be van X-elve, az bekerül a sorsolásba. <br><br>
                Miután kiválogattad, mely játékok legyenek benne a kerékben, nyomj a pörgetés gombra.<br><br>
                Végül megkapod a kisorsolt játékot.`;
            break;
        case 3:
            message = `Ez itt az összehasonlítás oldal<br><br>
                Ezen az oldalon találhatsz összehasonlíthatsz két, általad kiválasztott játékot.<br><br>
                Először válassz ki a könyvtáradban lévő játékok közül kettőt.<br><br>
                Ezek után az oldal összehasonlítja a játékokat értékelés, ár és más tulajdonságk alapján`;
            break;
        case 4:
            message = `Ez itt a könyvtár oldal<br><br>
                Ezen az oldalon tárolhatod a már megszerzett játékaidat.<br><br>
                A keresővel tudsz rákeresni bizonyos játékokra.<br><br>
                A keresésed eredményét szűrheted a filterek segítségével`;
            break;
}
    overlay.innerHTML = message;
    overlay.style.display = "flex";
});

iframeElement.addEventListener("mouseleave", () => {
    overlay.style.display = "none";
});
let overlayVisible = false;

iframeElement.addEventListener("click", () => {
    if (window.innerWidth <= 768) { // csak mobil nézetben
        overlayVisible = !overlayVisible;
        overlay.style.display = overlayVisible ? "flex" : "none";
    }
});