$(function(){
    $(window).scroll(function(){
        var windowoffY = $(window).scrollTop()//posição da scroollbar
        var windowHeight = $(window).height()//altura da janela
        $('.sessao').each(function(){//each é um looping
            var elOffY = $(this).offset().top//distancia do elemento ate o topo da janela
            if(elOffY + 700 < (windowoffY + windowHeight) && elOffY + 30 + $(this).height() > windowoffY){
                $('a').css('border-bottom', '0')
                var target =  $(this).attr('target')
                $('.' + target).css('border-bottom', '2px solid #444')
                console.log("estamos na sessae" + $(this).attr('target'))
                return
            }
        })
    })
})

