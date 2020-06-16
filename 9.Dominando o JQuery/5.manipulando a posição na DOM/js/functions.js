$(function(){
     // // função  append() é para adicionar elementos no final do elemento selecionado
     // $('.box div').eq(0).append('<h3>append()</h3>')

     // // var teste = $('<h3>appendTo()</h3>').appendTo($('.box'))
     // // teste.css('color', 'red')

     // // prepend() é para adicionar elementos no começo do elemento selecionado
     // $('.box').prepend('<h3>prepend()</h3>')

     // var t = 'after()'
     // var t2 = 'before()'
     // var t3 = '<p>insertAfter</p>'
     // var t4 = '<p>insertBefore</p>'
     // $('.box').after(t)
     // $('.box').before(t2)

     // $(t3).insertAfter('.box').css('color', 'red')
     // $(t4).insertAfter('.box').css('color', 'red')

     setTimeout(function(){
          $('.box').eq(0).remove();
     }, 3000 )




     
})

