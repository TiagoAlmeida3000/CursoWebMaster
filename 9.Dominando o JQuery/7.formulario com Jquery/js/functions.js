$(function(){

     
     $('.form_contado').submit(function(){
          var input = $('.form_contado input[type=text]')
          var container = $('.container')
          var content = 'Nome: ' + $('input[name=nome]').val() + 
          '<hr>Email: ' + $('input[name=email]').val() + 
          '<hr>Telefone: ' + $('input[name=telefone]').val()

          container.html(content)
          return false
     })
})

