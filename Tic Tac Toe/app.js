let boxes=document.querySelectorAll(".box");
let new_game_button=document.querySelector("#new-game");
let reset_button=document.querySelector(".reset-button");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnX=true;
let count=0;
let winningPatterns=[

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
]

boxes.forEach((box)=>{

    box.addEventListener("click",function(){

        count++; 
        if(turnX===true){
            //player-X turn
            box.innerText="X";
            turnX=false;
        }
        else{
            //player-Y turn
            box.innerText="Y";
            turnX=true;
        }
        box.disabled=true;

        checkWinner();
    });
});


const checkWinner = () => {
    for (let pattern of winningPatterns) {
     
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 !== "" && position2 !== "" && position3 !== "") {
            if (position1 === position2 && position2 === position3) {
                showWinner(position1);
            }
            else if(count===9){
                msg.innerText="It's a Draw!";
                msg_container.classList.remove("hide");  
            }
        }
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");

    // Sabhi boxes disable kar diye
    boxes.forEach((box) => {
        box.disabled = true;
    });
};


const resetGame=()=>{
    count=0;
    turnX=true;
    for(let box of boxes){
        box.innerText="";
        box.disabled=false;
    }
    msg_container.classList.add("hide");
};

new_game_button.addEventListener("click",resetGame);
reset_button.addEventListener("click",resetGame);
