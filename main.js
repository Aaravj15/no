function getPara(){
    var inputs = [];
    for (var j=1;j <= 4;j++)
    {
        inputs.push(document.getElementById("input_1"+ j).value);
        inputs.push(document.getElementById("input_2"+ j).value);
        inputs.push(document.getElementById("input_3"+ j).value);
        inputs.push(document.getElementById("input_4"+ j).value);
        inputs.join(". ");
    }
    document.getElementById("Para_1").innerHTML = inputs.join(". ");
}