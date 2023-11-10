javascript
function Solve(value) {
   document.getElementById('res').value += value;
}

function Clear() {
   document.getElementById('res').value = '';
}

function Back() {
   var value = document.getElementById('res').value;
   document.getElementById('res').value = value.slice(0, -1);
}

function Result() {
   var value = document.getElementById('res').value;
   var result = eval(value);
   document.getElementById('res').value = result;
}