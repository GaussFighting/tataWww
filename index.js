
function setCopyright() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  if (currentYear === 2021) {
    document.getElementById("copyright").innerHTML = "<div><b><p><b>copyright &#169 " + currentYear + "</b></p><p><b>\nzbigniew-kowerczyk.com</b></p></b></div>";
  } else {
    document.getElementById("copyright").innerHTML = "<div><b><p><b>copyright &#169 2021 - " + currentYear + "</b></p><p><b>\nzbigniew-kowerczyk.com</b></p></b></div>";
  }
}
setCopyright();


$(".book").mouseenter(function () {
  $(this).parent(".book-wrap").addClass("rotate");
});

$(".book").mouseleave(function () {
  $(this).parent(".book-wrap").removeClass("rotate");
});

$(".book").click(function () {
  $(this).parent(".book-wrap").addClass("flip");
});

$(".book-back").click(function () {
  $(this).parent(".book-wrap").removeClass("flip");
});
/* dbs book */
$(".book-dbs").mouseenter(function () {
  $(this).parent(".book-wrap").addClass("rotate");
});

$(".book-dbs").mouseleave(function () {
  $(this).parent(".book-wrap").removeClass("rotate");
});

$(".book-dbs").click(function () {
  $(this).parent(".book-wrap").addClass("flip");
});

$(".book-back-dbs").click(function () {
  $(this).parent(".book-wrap").removeClass("flip");
});
/* odwet book */
$(".book-odwet").mouseenter(function () {
  $(this).parent(".book-wrap").addClass("rotate");
});

$(".book-odwet").mouseleave(function () {
  $(this).parent(".book-wrap").removeClass("rotate");
});

$(".book-odwet").click(function () {
  $(this).parent(".book-wrap").addClass("flip");
});

$(".book-back-odwet").click(function () {
  $(this).parent(".book-wrap").removeClass("flip");
});
/* zieloneSlonce book */
$(".book-zs").mouseenter(function () {
  $(this).parent(".book-wrap").addClass("rotate");
});

$(".book-zs").mouseleave(function () {
  $(this).parent(".book-wrap").removeClass("rotate");
});

$(".book-zs").click(function () {
  $(this).parent(".book-wrap").addClass("flip");
});

$(".book-back-zs").click(function () {
  $(this).parent(".book-wrap").removeClass("flip");
});

function readMore(event) {

  const button = event.target;
  const newsAboutDiv = button.parentElement.parentElement;
  const bookTableDiv = button.parentElement.parentElement.parentElement.parentElement;
  const bookOdwet = bookTableDiv.children[0].children[0].children[0].children[0].children[0].children[0];
  const bookGrandParent = bookOdwet.parentElement.parentElement.parentElement.parentElement.parentElement;

  const dots = button.parentElement.children[1].children[0];
  const moreText = button.parentElement.children[1].children[1];



  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.innerHTML = "Czytaj więcej";
    moreText.style.display = "none";

    button.style.marginBottom = "0px"
    newsAboutDiv.style.height = "600px"
    bookOdwet.style.position = "relative"
    bookGrandParent.style.height = "inherit"


  } else {
    dots.style.display = "none";
    button.innerHTML = "Czytaj mniej";
    moreText.style.display = "inline";

    button.style.marginBottom = "200px"
    newsAboutDiv.style.height = "auto"
    bookOdwet.style.position = "absolute"
    bookGrandParent.style.height = "800px"

  }
}

function readMore1(event) {

  const button = event.target;
  const newsAboutDiv = button.parentElement.parentElement;
  const bookTableDiv = button.parentElement.parentElement.parentElement.parentElement;
  const bookOdwet = bookTableDiv.children[1].children[0].children[0].children[0];
  const bookGrandParent = bookOdwet.parentElement.parentElement.parentElement.parentElement.parentElement;

  const dots = button.parentElement.children[1].children[0];
  const moreText = button.parentElement.children[1].children[1];



  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.innerHTML = "Czytaj więcej";
    moreText.style.display = "none";

    button.style.marginBottom = "0px"
    newsAboutDiv.style.height = "600px"
    // bookOdwet.style.position = "relative"
    // bookGrandParent.style.height = "inherit"


  } else {
    dots.style.display = "none";
    button.innerHTML = "Czytaj mniej";
    moreText.style.display = "inline";

    button.style.marginBottom = "200px"
    newsAboutDiv.style.height = "auto"
    // bookOdwet.style.position = "absolute"
    // bookGrandParent.style.height = "800px"

  }
}

var myAudio = document.getElementById("audio1"); 

function playPause() { 
  const playPauseImg = document.getElementById("audiozsimg");
  if (myAudio.paused) {
    myAudio.play(); 
     playPauseImg.src = "./pictures/pausebutton.png";
     

    }else {
    myAudio.pause(); 
    playPauseImg.src = "./pictures/playbutton.png";
    
  }
} 

