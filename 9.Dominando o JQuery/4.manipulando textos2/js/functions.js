$(function(){


     var el = $('input[type=button]')

     el.click(function(){
          var v = $('input[type=text]').val()
          // //split separa a string com base no delimitador
          // var v2 = v.split("@")
          // console.log(v2)
          // console.log(v.substr(1,2))

          var splitstr = v.split("@")

          if(splitstr[1] == 'hotmail.com'){
               $('input[type=text]').css('opacity', '0')
          }else{
               console.log("A condição nao bateu")
          }
     })

})

