let display = document.querySelector("#screen");
let btn = document.querySelectorAll("button");
let expression = "";

btn.forEach((singlebtn)=>{
    singlebtn.addEventListener("click",()=>{
        
        if (singlebtn.innerText === "=") {
            expression = eval(expression);
            display.value = expression;
        }else {
        expression += singlebtn.innerText;
        display.value = expression;
        }

        if (singlebtn.innerText === "C") {
            expression = "";
            display.value = 0;
        }

        
    })
})