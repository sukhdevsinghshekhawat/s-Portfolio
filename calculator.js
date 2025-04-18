let numBoxes = document.querySelectorAll('.num');
let inputbox = document.getElementById('inputnum');
let string="";
inputbox.focus();
let arr=Array.from(numBoxes);
arr.forEach((num) => {
    num.addEventListener("click", (e) => {
        if(e.target.innerHTML==='=')
        {   
            if(string==""){
                 alert("Enter a value");
            }
            else{
                string=eval(string);
                inputbox.value=string;
                let sh=inputbox.value;
                console.log(sh);
            }
           
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            inputbox.value=string;

        }
        else if(e.target.innerHTML=='DEL'){
              string=string.substring(0,string.length-1);
              inputbox.value=string;
        }
        else{
            string+=e.target.innerHTML;
            inputbox.value=string;
        }
    });
});
