let boxes=document.querySelectorAll(".box");
let restart=document.querySelector("#restart");
let newgame=document.querySelector("#new");
let msgc=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turnO=true;
 const win=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]

 ];


 const reset=()=>{
turnO=true;
enable();
msgc.classList.add("hide");
 }




 boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turnO){
        box.innerText='O';
        turnO=false;
    }
    else{
        box.innerText='X';
        turnO=true;
    }
    box.disabled=true;
    Winner();
})
 })


 const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }

 const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }
 }



const showWinner=(win)=>{
msg.innerText=`Congratulations,${win} is the winner`;
msgc.classList.remove("hide");
disable();
}


 const Winner=()=>{
    for(let pos of win){
    let val1=boxes[pos[0]].innerText;
    let val2=boxes[pos[1]].innerText;
    let val3=boxes[pos[2]].innerText;

    if(val1!="" && val2!="" && val3!="")
        {
            if(val1===val2 && val2===val3){
                showWinner(val1);
            }
        }

    
    }
 }

 restart.addEventListener("click",reset);
 newgame.addEventListener("click",reset);
