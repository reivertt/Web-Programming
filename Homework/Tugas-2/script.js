function sum() {
    const num1 = parseInt(document.getElementById("input_one").value);
    const num2 = parseInt(document.getElementById("input_two").value);
    const res = num1 + num2
    document.getElementById("result").innerHTML=res
}
function sub() {
    const num1 = parseInt(document.getElementById("input_one").value)
    const num2 = parseInt(document.getElementById("input_two").value)
    const res = num1 - num2
    document.getElementById("result").innerHTML=res
}
function mul() {
    const num1 = parseInt(document.getElementById("input_one").value)
    const num2 = parseInt(document.getElementById("input_two").value)
    const res = num1 * num2
    document.getElementById("result").innerHTML=res
}
function div() {
    const num1 = parseInt(document.getElementById("input_one").value)
    const num2 = parseInt(document.getElementById("input_two").value)
    const res = num1 / num2
    document.getElementById("result").innerHTML=res
}

function bagus() {
    const old = document.getElementById("burik")
    const neu = document.getElementById("bagus")

    if (old.style.display = "block") {
        old.style.display = "none";
        neu.style.display = "block";
        document.body.style.backgroundColor = "#97a97c";
        document.getElementById("bagush").style.backgroundColor = "#97a97c"
        document.getElementById("burikku").style.backgroundColor = "#212529"
    } 
}

function lama() {
    const old = document.getElementById("bagus")
    const neu = document.getElementById("burik")

    if (old.style.display = "block") {
        old.style.display = "none";
        neu.style.display = "block";
        document.body.style.backgroundColor = "#343a40";
        document.getElementById("bagush").style.backgroundColor = "#718355" 
        document.getElementById("burikku").style.backgroundColor = "#343a40"
    } 
}

function disp(val) {    
    let x = document.getElementById("display_main")
    if (x.value == '0') x.value = val
    else  x.value += val
}

function clr() {
    document.getElementById("display_log").value = ''
    document.getElementById("display_main").value = '0'
}

function result() {
    let x = document.getElementById("display_main").value
    document.getElementById("display_log").value = x
    let y = eval(x)
    document.getElementById("display_main").value = y
}

function del() {
    let x = document.getElementById("display_main").value
    document.getElementById("display_main").value = x.substr(0, x.length-1)
}