let mybutton = document.getElementById("felgorgGomb");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
    window.scrollTo(0, 0);
}


function openMDMenu() {
  document.getElementById("overlayMD").style.height = "100%";
  document.getElementById("").style.transform = "rotate(180deg)";
}

function closeMDMenu(){
  document.getElementById("overlayMD").style.height = "0%";
}