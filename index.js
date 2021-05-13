function setCopyright() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    if (currentYear === 2021) {
        document.getElementById("copyright").innerHTML = "<div><b><pre><b>copyright &#169 " + currentYear + "</b></pre><pre><b>\nzbigniew-kowerczyk.pl</b></pre></b></div>";
    } else {
        document.getElementById("copyright").innerHTML = "<div><b><pre><b>copyright &#169 2021 - " + currentYear + "</b></pre><pre><b>\nzbigniew-kowerczyk.pl</b></pre></b></div>";
    }
}
setCopyright();


$(".book").mouseenter(function(){
    $(this).parent(".book-wrap").addClass("rotate");
  });
  
  $(".book").mouseleave(function(){
    $(this).parent(".book-wrap").removeClass("rotate");
  });
  
  $(".book").click(function(){
    $(this).parent(".book-wrap").addClass("flip");
  });
  
  $(".book-back").click(function(){
    $(this).parent(".book-wrap").removeClass("flip");
  });
