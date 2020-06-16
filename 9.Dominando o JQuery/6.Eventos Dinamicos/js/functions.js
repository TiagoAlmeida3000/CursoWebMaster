$(function(){
     
     // $('a').click(function (e) {          
     //      alert('Ola mundo')
     // });

     // $('body').on('click', 'a', function(){
     //      alert('ola mundo')
     //      return false
     // })

     // $('body').html('<a href="">Meu link</a>')

     var func = function(){
          $(this).css('background', 'red')
          console.log($(this).index())
     }

     // $('input[name=nome_pessoa]').keyup(func)
     $('input[name=nome_pessoa]').keydown(func)

})

