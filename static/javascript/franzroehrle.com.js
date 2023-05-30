// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scrollerAnim()};

function scrollerAnim() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var scrolledFaster = (winScroll / height) * 100;
  var scrolledFastest = (winScroll / height) * 130;
  document.getElementById("progressBar").style.height = scrolled + "%";
  document.getElementById("header").style.opacity = scrolled + "%";
  document.getElementById("footer").style.opacity = scrolled + "%";
  document.getElementById("portfolioButton").style.opacity = scrolledFaster + "%";

  if (scrolledFastest < 130)
    document.getElementById("portfolioButton").style.scale = scrolledFastest + "%";
}

window.addEventListener("scroll", reveal,);

// To check the scroll position on page load
reveal();

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}