function add(){
    let inputA = document.querySelector("#input_a").value;
    let inputB = document.querySelector("#input_b").value;
    
    let result = Number(inputA) + Number(inputB);
    // debugger;
    let output = document.querySelector("#result");
    output.innerHTML = result;
}

btn = document.querySelector("#btn");
btn.addEventListener("click", add);