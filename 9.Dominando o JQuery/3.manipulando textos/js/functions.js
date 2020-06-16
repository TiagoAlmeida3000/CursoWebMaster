$(function(){

     var el = $('.box')
     var el2 = $('box2')
     var el3 = $('input[type=text]')
     var el4 = $('textarea')

     var texto = 'Ola mundo'

     el.html("<div class=\"teste\">"+texto+"</div>")
     el.html(el.html() + '<h1 class="texto">Meu texto via javascript</h1>')

     el2.text("<div></div>")
     el2.text(el2.text() + "Ola")

     el3.val("Ola")

     el4.text("ola")





})

