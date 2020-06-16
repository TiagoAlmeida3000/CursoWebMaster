$(function(){

       $('.box').css('width', '900px')

       console.log('width: ' + $('.box').width())
       console.log('innerWidth: ' + $('.box').innerWidth())
       console.log('outerWidth: ' + $('.box').outerWidth(true))

       console.log('height: ' + $('.box').height())
       console.log('innerHeight: ' + $('.box').innerHeight())
       console.log('outerHeight: ' + $('.box').outerHeight(true))

        /* 
        
        width/height: Dimensão calculada total com base no padding
        innerWidth/innerHeight: Dimensão calculada total incluindo o padding
        outerWidth/outerHeight: Dimensão calculada total incluindo o padding e margin(se o parametro
        for true)

        */




})

