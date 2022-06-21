function calculategpa(){
    let g1=document.getElementById("g1").selectedOptions[0].value; 
    let g2=document.getElementById("g2").selectedOptions[0].value;
    let g3=document.getElementById("g3").selectedOptions[0].value;
    let g4=document.getElementById("g4").selectedOptions[0].value;
    let g5=document.getElementById("g5").selectedOptions[0].value;

    let c1 = parseFloat(document.getElementById("c1").value); 
    let c2 = parseFloat(document.getElementById("c2").value); 
    let c3 = parseFloat(document.getElementById("c3").value); 
    let c4 = parseFloat(document.getElementById("c4").value); 
    let c5 = parseFloat(document.getElementById("c5").value); 

    let result = document.getElementById("result");

    if(g1=="Fail"||g2=="Fail"||g3=="Fail"||g4=="Fail"||g5=="Fail")
    {
        result.value="Reappear";
    }
    else
    {
        let G1,G2,G3,G4,G5;
        if(g1=="O")
        G1=10;
        else if(g1=="A+")
        G1=9;
        else if(g1=="A")
        G1=8;
        else if(g1=="B+")
        G1=7;
        else if(g1=="B")
        G1=6;

        if(g2=="O")
        G2=10;
        else if(g2=="A+")
        G2=9;
        else if(g2=="A")
        G2=8;
        else if(g2=="B+")
        G2=7;
        else if(g2=="B")
        G2=6;

        if(g3=="O")
        G3=10;
        else if(g3=="A+")
        G3=9;
        else if(g3=="A")
        G3=8;
        else if(g3=="B+")
        G3=7;
        else if(g3=="B")
        G3=6;

        if(g4=="O")
        G4=10;
        else if(g4=="A+")
        G4=9;
        else if(g4=="A")
        G4=8;
        else if(g4=="B+")
        G4=7;
        else if(g4=="B")
        G4=6;

        if(g5=="O")
        G5=10;
        else if(g5=="A+")
        G5=9;
        else if(g5=="A")
        G5=8;
        else if(g5=="B+")
        G5=7;
        else if(g5=="B")
        G5=6;

        result.value=((G1*c1)+(G2*c2)+(G3*c3)+(G4*c4)+(G5*c5))/(c1+c2+c3+c4+c5);

    }
}

function calculate()
{
    let s1 = parseFloat(document.getElementById("s1").value); 
    let s2 = parseFloat(document.getElementById("s2").value);
    let s3 = parseFloat(document.getElementById("s3").value);
    let s4 = parseFloat(document.getElementById("s4").value);
    let s5 = parseFloat(document.getElementById("s5").value);
    let s6 = parseFloat(document.getElementById("s6").value);
    let s7 = parseFloat(document.getElementById("s7").value);
    let s8 = parseFloat(document.getElementById("s8").value);
    let result = document.getElementById("result");
    if(Number.isNaN(s1)){
        result.value = 0;
    }
    else if(Number.isNaN(s2)){
        result.value = s1;
    }  
    else if(Number.isNaN(s3)){
        result.value = (s1+s2)/2.0;
    } 
    else if(Number.isNaN(s4)){
        result.value = (s1+s2+s3)/3.0;
    } 
    else if(Number.isNaN(s5)){
        result.value = (s1+s2+s3+s4)/4.0;
    }     
    else if(Number.isNaN(s6)){
        result.value = (s1+s2+s3+s4+s5)/5.0;
    }     
    else if(Number.isNaN(s7)){
        result.value = (s1+s2+s3+s4+s5+s6)/6.0;
    }     
    else{
        if(Number.isNaN(s8)){
            result.value = (s1+s2+s3+s4+s5+s6+s7+s8)/7.0;
        }
        else{
            result.value = (s1 + s2+s3+s4+s5+s6+s7+s8)/8.0;
        }
    } 
}