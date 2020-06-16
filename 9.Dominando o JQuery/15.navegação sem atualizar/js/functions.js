$(function(){

    verificarCliqueMenu

   function verificarCliqueMenu() {  }
        $('a').click(function(){
            var href = $(this).attr('href')
            $.ajax({
                'beforeSend' : function(){
                    console.log("Estamos chamando o beforeSend")
                },
                'timeout' : 10000,
                'url': href,
                'error': function( jqXHR, String, errorThrown ){
                            if(jqXHR.statusText == 'Not Found'){
                                console.log("Pagina não encontrada")
                            }
                },
                'success': function(data){
                    $('#container').html(data)

                }
                    
            })

            return false
        })
})

