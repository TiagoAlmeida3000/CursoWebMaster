$(function(){
    $('.ico i').click(function(){
        var el = $('.side_bar_desktop')
        if(el.is(':visible')){
            el.hide()
            $('.main_content').css('width','100%')
        }else{
            el.show()
            $('.main_content').css('width','calc(100% - 300px)')
        }
    })
})