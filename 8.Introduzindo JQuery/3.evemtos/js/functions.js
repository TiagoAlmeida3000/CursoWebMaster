$(function(){

        function validarClickHoverBlur(){
                $('.artigo1').click(function(){
                        $('.artigo2').css('background-color', 'purple')
                })

                $('.artigo1').hover(function(){
                        $('.artigo1').css('background-color', 'purple')
                },function(){
                        $('.artigo1').css('background-color', 'royalblue')
                })

                $('textarea').focus(function(){
                        console.log('dentro')
                }).blur(function(){
                        console.log('fora')
                })
        }

        function validarForm(){
                $('select').change(function (){ 
                        console.log('Meu select foi alterado')                        
                });
        }

        validarClickHoverBlur()
        validarForm()


        
})

