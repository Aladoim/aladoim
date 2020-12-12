var scrolpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (scrolpos > currentScrollPos) {
    document.querySelector("header nav").style.top = "0";
  } else {
    document.querySelector("header nav").style.top = "-50px";
  }

  scrolpos = currentScrollPos;
}