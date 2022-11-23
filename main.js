Q = 0

function win(p){
    if(p == 2){
        document.getElementById("status").textContent="PLAYER P2 WON"
    }
    else if(p == 1){
        document.getElementById("status").textContent="PLAYER P1 WON"
    }

}

function enter(n){
    a=document.getElementsByClassName("s1")
    if(a[n].textContent==""){
        Q = Q+1

        if(Q%2 == 0){
            a[n].textContent = "X"
        }
        else{
            a[n].textContent = "O"
        }
    }

    b=[];
    for(i=0;i<9;i++){
        b.push(a[i].textContent)
       
    }

    if(b[0] == "O" && b[1] == "O" && b[2] == "O" ){
        win(2)
    }
    else if(b[0] == "X" && b[1] == "X" && b[2] == "X" ){
        win(1)
    }
    else if(b[3] == "X" && b[4] == "X" && b[5] == "X" ){
        win(1)
    }
    else if(b[6] == "X" && b[7] == "X" && b[8] == "X" ){
         win(1)
    }
    else if(b[3] == "O" && b[4] == "O" && b[5] == "O" ){
        win(2)
    }
    else if(b[6] == "O" && b[7] == "O" && b[8] == "O" ){
        win(2)
    }
    else if(b[0] == "X" && b[3] == "X" && b[6] == "X" ){
        win(1)
    }
    else if(b[1] == "X" && b[4] == "X" && b[7] == "X" ){
        win(1)
    }
    else if(b[2] == "X" && b[5] == "X" && b[8] == "X" ){
        win(1)
    }
    else if(b[0] == "X" && b[4] == "X" && b[8] == "X" ){
        win(1)
    }
    else if(b[2] == "X" && b[4] == "X" && b[6] == "X" ){
    win(1)
    }
    else if(b[6] == "O" && b[7] == "O" && b[8] == "O" ){
        win(2)
    }
    else if(b[0] == "O" && b[3] == "O" && b[6] == "O" ){
        win(2)
    }
    else if(b[1] == "O" && b[4] == "O" && b[7] == "O" ){
        win(2)
    }
    else if(b[2] == "O" && b[5] == "O" && b[8] == "O" ){
        win(2)
    }
    else if(b[0] == "O" && b[4] == "O" && b[8] == "O" ){
        win(2)
    }
    else if(b[2] == "O" && b[4] == "O" && b[6] == "O" ){
        win(2)
    }


}
function reset(){
    document.getElementById("status").textContent=""
    Q=0
    a=document.getElementsByClassName("s1")
    for(n=0;n<9;n++){
        a[n].textContent = "";
    }
} 