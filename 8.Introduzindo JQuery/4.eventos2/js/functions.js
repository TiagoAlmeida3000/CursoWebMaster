$(function(){

        // var timer

        // $(window).scroll(function () { 
                
        // });

        // $(window).resize(function(){
        //         console.log('Redimensionar')
        //         clearTimeout(timer)
        //         timer = setTimeout(function(){
        //                 location.href = 'http://localhost/Curso%20WebMaster/8.Introduzindo%20JQuery/4.eventos2/'
        //         },1000)
        // })

        // $('.box a').click(function(e){
        //         e.preventDefault()
        // })



        $('.box').click(function(e){
                e.stopPropagation()
        })

        $('body').click(function(){
                $('.box').css('background-color', 'green')
        })


        

})

