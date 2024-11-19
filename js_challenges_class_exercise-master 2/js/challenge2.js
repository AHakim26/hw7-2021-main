document.querySelector("#sameAddress").addEventListener("click",function(){
    console.log("thisworked");
    if (this.checked){
        document.querySelector("#home").value=document.querySelector("#billing").value
    }
    else{
        document.querySelector("#home").style.display="none"
    }});