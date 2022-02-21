function  calc(){
    var str = String(document.getElementById("str").value);
    var basestr = str
    var strbaseword = str.split(/[.?,:;! ]+/)
    strbaseword = strbaseword.filter(function (el) {
        return (el != null && el != "" || el === 0);
    });
    str = str.split(/[.?,:;! ]+/)
    str = str.filter(function (el) {
        return (el != null && el != "" || el === 0);
    });
    let map = new Map();
    for(let i = 0 ; i < str.length; i++){
        var word1 = str[i].split("")
        var set1 = new Set(word1);
        var word = Array.from(set1);
        for(let i = 0 ; i < word.length; i++){
            if(!map.has(word[i])){
                map.set(word[i], 1)
            }
            else{
                var count = map.get(word[i])
                map.delete(word[i])
                map.set(word[i], count + 1)
            }
        }
    }

    
    //alert(str)
    for (let entry of map){
        //alert(entry[0] + " " + entry[1] + " " + str.length)
        if(entry[1] == str.length){
            for(let i = 0 ; i < str.length; i++){
                str[i] = str[i].replaceAll(entry[0], "")
            }
        }
    }

    for(let i = 0 ; i < strbaseword.length; i++){
        basestr = basestr.replace(strbaseword[i], str[i])
    }

    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = "<strong>Ответ: </strong>" + basestr;
    document.body.append(div);
    
    for (let entry of map){
        //alert(entry[1])
    }
}