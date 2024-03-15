function inputnumber(value)
{
    document.getElementById("number").value+=value;
}
function calculate()
{
    var answer=eval(document.getElementById("number").value);
    document.getElementById("number").value=answer;
}
function clearDisplay()
{
    document.getElementById('number').value='';
}