function adapt(str){
    str = str.split(/[\D]+/)
    var chislo = Number(str[0])
    if(str.length == 1){
        return chislo
    }
    else{
        var count = 10
        for(let i = 0 ; i < str[1].length; i++){
            chislo2 = Number(str[1][i])
            chislo = chislo + (chislo2/count)
            count = count * 10
        }
        return chislo
    }
}

function  calc(){
    var str = String(document.getElementById("str").value);
    str = str.split(/[\a-zA-zа-яА-яё$ ]+/).join("")
    var numbers = str.split(/[+=\-*\/]+/)

    numbers = numbers.filter(function (el) {
        return (el != null && el != "" || el === 0);
    });
    var math = str.split(/[\d.]+/)
    math = math.filter(function (el) {
        return (el != null && el != "" || el === 0);
    });
    
    var answer = Number(numbers[0])
    for(let i = 0 ; i < math.length; i++){
        if(math[i] == "+"){
            answer = answer + Number(numbers[i+1])
        }
        if(math[i] == "-"){
            answer = answer - Number(numbers[i+1])
        }
        if(math[i] == "*"){
            answer = answer * Number(numbers[i+1])
        }
        if(math[i] == "/"){
            answer = answer / Number(numbers[i+1])
        }
        if(math[i] == "="){
            break
        }
    }

    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>Ответ: </strong>" + answer.toFixed(2);
    document.body.append(div);
}