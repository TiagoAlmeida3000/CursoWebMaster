window.onload = function(){

    for(var i = 0;i <= 10; i++){
        if(i == 2){
            continue
        }
        console.log(i)
    }

    console.log("")

    for(var i = 0;i <= 10; i++){
        if(i == 2){
            break
        }
        console.log(i)
    }

    console.log("")

    var n = 0
    while(n < 10){
        if(n == 4){
            break
        }
        console.log(n)
        n++
    }

}