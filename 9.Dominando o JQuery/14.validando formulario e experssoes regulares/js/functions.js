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
       var el = $('.closeBtn')

       el.click(function(){
           $('.bg').fadeOut()
       })

       $('.formulario').click(function(e){
            e.stopPropagation()
       })
   }

   $('form#form1').submit(function(){
       var nome = $('input[name=nome]').val()
       var telefone = $('input[name=telefone]').val()
       var email = $('input[name=email]').val()

       if(verificarNome(nome) == false){
           aplicarCampoInvalido($('input[name=nome]'))
       }
       else if(verificarTelefone(telefone) == false){
            aplicarCampoInvalido($('input[name=telefone]'))
       }
       else if(verificarEmail(email) == false){
            aplicarCampoInvalido($('input[name=email]'))
       }
       else{
           console.log("Formulario enviado com sucesso")
       }
       return false

   })

   //funções para estilizar o formulario

   function aplicarCampoInvalido(el){
        el.css('border', '2px solid red')
        // el.data('invalido', 'true')
        el.val('')
   }

   function resetarCampoInvalido(el){
        el.css('border', '1px solid #ccc')
        // el.data('invalido', 'true')
   }

   $('input[type=text]').focus(function(){
       resetarCampoInvalido($(this))
   })

   //Funções para verificar nosso campo
   function verificarNome(nome){
        //Contando a quantidade de espaços e os repectivos valores
        if (nome == ''){
            return false
        }
        var amount = nome.split(' ').length
        var splitStr = nome.split(' ')
        if(amount >= 2){
            for(var i = 0; i < amount; i++ ){
                if(splitStr[i].match(/^[A-Za-z]{1,}$/)){
                    console.log("Condição nome bateu")
                }else{
                    return false
                }
            }
        }else{
            return false
        }
    }

    function verificarTelefone(telefone){
        if(telefone == ''){
            return false
        }
        if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null){
            return false
        }
    }

    function verificarEmail(email){
        if(email == ''){
            return false
        }

        if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
            return false
        }
    }

})

