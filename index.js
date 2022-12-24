var a;

function show_hide_yes(){


    if(a==1){

        document.getElementById("textos").style.display="inline";
        
        return a=0;

    } else {

        document.getElementById("textos").style.display="none";
        document.getElementById("image").style.display="none";
        document.getElementById("image2").style.display="inline";
        document.getElementById("image3").style.display="inline";
        document.getElementById("image4").style.display="inline";
        document.getElementById("image5").style.display="inline";
        document.getElementById("image14").style.display="inline";
        document.getElementById("yes-btn").style.display="none";
        document.getElementById("no-btn").style.display="none";
        document.getElementById("question").style.display="none";
        return a=1;
        
    }

}

function show_hide_no(){


    if(a==1){

        document.getElementById("textos").style.display="inline";

        return a=0;

    } else {

        document.getElementById("textos").style.display="none";
        document.getElementById("image").style.display="none";
        document.getElementById("image6").style.display="inline";
        document.getElementById("image7").style.display="inline";
        document.getElementById("image8").style.display="inline";
        document.getElementById("image9").style.display="inline";
        document.getElementById("image10").style.display="inline";
        document.getElementById("image11").style.display="inline";
        document.getElementById("image12").style.display="inline";
        document.getElementById("image13").style.display="inline";
        document.getElementById("no-btn").style.display="none";
        document.getElementById("yes-btn").style.display="none";
        document.getElementById("question").style.display="none";
        return a=1;
        
    }

}