$(function(){

    //Plugin JS SOCIALS
    $('#social-share').jsSocials({
        shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
    });

    //Plugin mask
    $('input[name=telefone]').mask('(99)99999-9999')
    $('input[name=data]').mask('99/99/9999')

    //Plugin FancyBox

    $('a').fancybox()


})

