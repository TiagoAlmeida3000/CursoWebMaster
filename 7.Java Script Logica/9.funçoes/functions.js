window.onload = function(){

    // function Conta(num1, num2){
    //     return num1 + num2
    // }
    // console.log(Conta(10, 20))

    // var variavel = function(){
    //     console.log("HELLOU!!!!!!")
    // }
    // variavel()

    var obj = {'nome' : 'tiago', "idade" : 23, "func" : function(){console.log("tiago")}}
    obj.func()
    obj.nome = "joao"
    console.log(obj)

}