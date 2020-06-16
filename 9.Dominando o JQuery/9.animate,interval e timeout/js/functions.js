$(function(){

//      var timer
//      var timeout = function(){
//           $('.box2').animate({
//                'width':'40%',
//                'height':'500px',
//                'marginLeft':'100px',
//                'paddingTop':'200px'
      
//           }, 2000)
//      }

//      $('body').click(function(){
//           alert('Animação cancelada')
//           clearTimeout(timer)
//      })

//     $('.box1').animate({
//          'width':'40%',
//          'height':'500px',
//          'marginLeft':'100px',
//          'paddingTop':'200px'

//     }, 2000, function(){
//           timer = setTimeout(timeout, 3000)
//     })

     var timer

     $('body').click(function(){
          clearInterval(timer)
     })

     timer= setInterval(function(){
          alert('Ola mundo')
     }, 3000)


})

