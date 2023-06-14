const inpNum = document.querySelector('#number')
const inpout = document.querySelector('#out')
const inpButton = document.querySelector('#button')

function number(){
     num=+inpNum.value
    if (num<0){
     inpout.innerHTML= "Please enter a positive number"
    } else {
    inpout.innerHTML= "Great!"

    }
}

function myFunction() {
    document.getElementById("myDIV").style.opacity = "0.5";
}

inpButton.addEventListener('click', number)
