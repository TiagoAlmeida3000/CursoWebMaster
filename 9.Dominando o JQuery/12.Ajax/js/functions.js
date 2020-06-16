$(function(){

    $.ajax({
        'url':'conteudo.html',
        //'method':'post'
        //data{'nome':'Tiago', 'idade':'23'}
    }).done(function(data){
        $('#container').append(data)
    })
})

