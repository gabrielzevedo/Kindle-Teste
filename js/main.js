// ROLAGEM DE PÁGINA SUAVE
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
//FIM - ROLAGEM DE PAGINA SUAVE

function escolhePlano(plano){

  if(plano == "planoFull"){
    $("#tipoPlano").val("planoFull");
    escolhePlanoForm();
  }else{
    $("#tipoPlano").val("planoLight");
    escolhePlanoForm();
  }
  $("#formulario").removeClass( "hidden" );
}

function escolhePlanoForm(){
  if($("#tipoPlano").val() == "planoFull"){
    $("#precoForm").html('R$<strong>29</strong><sup>,99</sup><div class="obs"></div>');
  }else{
    $("#precoForm").html('R$<strong>1</strong><sup>,99</sup><div class="obs">(3 primeiros meses, depois R$9<sup class="alt">,90</sup>)</div>');
  }
}

TweenMax.staggerFrom(".text h2", 1, {x:"-1000", ease:Power4.easeOut}, .2);

var persons = document.getElementById("persons");
TweenMax.from(persons, 1, {opacity:0, delay:".5", ease:Power4.easeOut});

TweenMax.staggerFrom(".col-lg-4", 0.5, {opacity:0, y:-50, delay: .8, ease:Power4.easeOut}, .5);