function ScrollGo(s){
    timeyi = setInterval(function(){
        for(var m=1;m<4;m++)
        {
            document.getElementById("Toppic_"+m+"_div").style.display='none';
			document.getElementById("Toppic_"+m).className ="";
        }
        document.getElementById("Toppic_"+s+"_div").style.display='block';
        document.getElementById("Toppic_"+s).className ="active";
        if(s>2){
           s=1;
        }else{
           s++;
        }
    },4000);
}
function ScrollStop(s){
    for(var i = 1;i<4;i++)
    {
        document.getElementById("Toppic_"+i+"_div").style.display = "none";
        document.getElementById("Toppic_"+i).className = "";
    }
    document.getElementById("Toppic_"+s+"_div").style.display = "block";
    document.getElementById("Toppic_"+s).className = "active";
    window.clearInterval(timeyi);
}
ScrollGo(2);  
