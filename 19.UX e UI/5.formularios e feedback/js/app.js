$(function(){
    $('form').submit(function(){
        erro = false
        var nome = $('[name=nome]').val()
        var email = $('[name=email]').val()
        var mensagem = $('[name=mensagem]').val()
        resetForm()
        if(nome == ''){
            erro = true
            var el = $('[name=nome]')
            el.parent().find('span').html('Por favor insira seu nome')
            el.css('border', '2px solid red')
        }
        if(email == ''){
            erro = true
            var el = $('[name=email]')
            el.parent().find('span').html('Por favor insira seu email')
            el.css('border', '2px solid red')
        }
        if(mensagem == ''){
            erro = true
            var el = $('[name=mensagem]')
            el.parent().find('span').html('Por favor insira seu mensagem')
            el.css('border', '2px solid red')
        }

        if(erro == false){
            $('.box_sucesso').fadeIn(function(){
                setTimeout(function(){
                    $('.box_sucesso').fadeOut()
                },5000)
            })
            $(this)[0].reset()
        }

        return false        
    })

    function resetForm(){
        $('input:not(.btn), textarea').css('border', '1px solid #ccc')
        $('span').html('')
    }
})