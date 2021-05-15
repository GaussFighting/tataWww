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
/* dbs book */
  $(".book-dbs").mouseenter(function(){
    $(this).parent(".book-wrap").addClass("rotate");
  });
  
  $(".book-dbs").mouseleave(function(){
    $(this).parent(".book-wrap").removeClass("rotate");
  });
  
  $(".book-dbs").click(function(){
    $(this).parent(".book-wrap").addClass("flip");
  });
  
  $(".book-back-dbs").click(function(){
    $(this).parent(".book-wrap").removeClass("flip");
  });
  /* odwet book */
  $(".book-odwet").mouseenter(function(){
    $(this).parent(".book-wrap").addClass("rotate");
  });
  
  $(".book-odwet").mouseleave(function(){
    $(this).parent(".book-wrap").removeClass("rotate");
  });
  
  $(".book-odwet").click(function(){
    $(this).parent(".book-wrap").addClass("flip");
  });
  
  $(".book-back-odwet").click(function(){
    $(this).parent(".book-wrap").removeClass("flip");
  });
    /* zieloneSlonce book */
    $(".book-zs").mouseenter(function(){
      $(this).parent(".book-wrap").addClass("rotate");
    });
    
    $(".book-zs").mouseleave(function(){
      $(this).parent(".book-wrap").removeClass("rotate");
    });
    
    $(".book-zs").click(function(){
      $(this).parent(".book-wrap").addClass("flip");
    });
    
    $(".book-back-zs").click(function(){
      $(this).parent(".book-wrap").removeClass("flip");
    });