document.addEventListener('input', function(e){
    if(e.target.id == "name"){
        let hiddenNameAstr = document.getElementById("first-astr");
        hiddenNameAstr.style.display = "none";
    }
    if(e.target.id == "email"){
        let hiddenEmailAstr = document.getElementById("sec-astr");
        hiddenEmailAstr.style.display = "none";
    }
    if(e.target.id == "message-text"){
        let hiddenMessageAstr = document.getElementById("third-astr");
        hiddenMessageAstr.style.display = "none";
    }
})