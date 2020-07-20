$('nav.desktop-nav a').hover(function(){
    $('nav.desktop-nav li').removeClass('selected')
    $(this).parent().addClass('selected')
})

$("nav.mobile-nav i").parent().find('ul').slideUp()
$('nav.mobile-nav i').click(function(){
    $(this).parent().find('ul').slideToggle()
})

var directory = '/Curso WebMaster/Projetos/projeto8/'

$('[goto=contato]').click(function(){
    location.href=directory+'index.html?contato'
    return false
})

checkUrl()

function checkUrl(){
    var url = location.href.split('/')
    var curPage = url[url.length-1].split('?')

    if(curPage[1] != undefined && curPage[1] == 'contato'){
        $('html,body').animate({'scrollTop':$('#contato').offset().top})
    }
}
