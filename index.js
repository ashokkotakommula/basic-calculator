let numButtons = document.querySelectorAll(".num");
let operButtons = document.querySelectorAll('.op');
let input = document.getElementById('input');
let clear = document.querySelector('#clear');
let reset = document.querySelector('#clr');
let equal = document.querySelector('#ans');

clear.addEventListener('click', function() {
    arr.pop();
    input.value = arr.join("");

})

reset.addEventListener('click', function() {
    arr.pop(arr.splice(0, arr.length));
    input.value = arr.join("");
})

const arr = [];
numButtons.forEach(button => {
    button.addEventListener('click', function() {
        arr.push(button.innerHTML);
        input.value = arr.join("");
    })
});

operButtons.forEach(oper => {
    oper.addEventListener('click', function() {
       arr.push(oper.innerHTML);
       input.value = arr.join("");
    })
})

equal.addEventListener('click', function() {
    input.value = eval(arr.join(""));
})