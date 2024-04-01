let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
console.log(choices);
let userchoicepara=document.querySelector("#yours");
let compchoicepara=document.querySelector("#comps");
const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userchoicepara.innerText=userscore;
        console.log(" user win ");
        mms.innerText="you win";
        msg2.style.backgroundColor="green";
    }
    else{
        compscore++;
        compchoicepara.innerText=compscore;
        console.log(" comp win ");
        mms.innerText="you lose";
        msg2.style.backgroundColor="red";
    }
}
const drawgame=() =>{
    console.log(" game was draw ");
    mms.innerText="game is draw play again";
    msg2.style.backgroundColor="blue";
    
}

const generatecomp=() =>{
    const choicearr=["rock","paper","sessior"];
    const randidx=Math.floor(Math.random()*3);
    return choicearr[randidx];
}

const playgame=(userchoice) => {
    console.log(" user choice is: ", userchoice);
    //generte com choice
    const compchoice=generatecomp();
    console.log(" comp choice is: ", compchoice);

    if(userchoice === compchoice){
        //draw game
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice === "rock"){
            //sessior,paper
            userwin = compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //sessior,rock
            userwin=compchoice==="sessior"?false:true;
        }
        else{
            //rock,paper
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);

    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });

});