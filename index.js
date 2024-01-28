let currentDisplay = "";
function appendNumber(number) {
    currentDisplay += number; 
    update(); 
}
function clearValues() {
    currentDisplay = "";
    update()
}
function showResult() {
    currentDisplay = eval(currentDisplay);
    update()
}
function update() {
    document.getElementById("display").value = currentDisplay;
}