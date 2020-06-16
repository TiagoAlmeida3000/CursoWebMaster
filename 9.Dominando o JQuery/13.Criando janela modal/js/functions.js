$(function(){

    abrirJanela()
    verificarCliqueFechar()

   function abrirJanela(){
       $('.btn').click(function(e){
           e.stopPropagation()
           $('.bg').fadeIn()
       })
   }

   function verificarCliqueFechar(){
       var el = $('body, .closeBtn')

       el.click(function(){
           $('.bg').fadeOut()
       })

       $('.formulario').click(function(e){
            e.stopPropagation()
       })

   }
})

