$(document).ready(function () {
    let firstNumber;
    let secondNumber;
    let operator;
    let functions;
    let rootfunctions;
    
    $(".num_key").click(function () {
        let result = $('#result').text();
        let currentNumber = $(this).text();
        //  alert(currentNumber);
        let newResult = Number(result + currentNumber);
        $('#result').text(newResult);

    });

    $('.operator').click(function (){
        firstNumber = Number($('#result').text());

        operator = $(this).text();

        $('#result').text(0);
    });

    $('#clear').click(function(){
        $('#result').text(0);
    });

    $('#equals').click(function (){
        secondNumber = Number($('#result').text());

        if(operator === '+'){
            $('#result').text(firstNumber + secondNumber);
        }
        else if(operator === '-'){
            $('#result').text(firstNumber - secondNumber);
        }
        else if(operator === '*'){
            $('#result').text(firstNumber * secondNumber);
        }
        else {
            $('#result').text(firstNumber / secondNumber);
        }
       


    })

    $('.functions').click(function (){
        firstNumber = Number($('#result').text());
        if (functions==="sin"){
            $('#result').text(Math.sin(firstNumber));
        }
        else if(functions==="cos"){
            $('#result').text(Math.cos(firstNumber));
        }
        else if (functions==="tan"){
            $('#result').text(Math.tan(firstNumber));
        }
        else {
            $('#result').text(Math.log(firstNumber));
        }
    })
    $('.rootfunctions').click(function(){
        firstNumber = Number($('#result').text());
        if(rootfunctions==="x²"){
            $('#result').text(Math.pow(firstNumber,2));
        }
        else if(rootfunctions==="√x"){
            $('#result').text(Math.pow(firstNumber,1/2));
        }
        else if (rootfunctions==="∛x"){
            $('#result').text(Math.tan(firstNumber,1/3));
        }

        else {
            $('#result').text(Math.pow(firstNumber,3));
        }
    })

})