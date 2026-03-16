let userScore = 0;
let compScore = 0;
const userScorecard=document.querySelector("#user-score");
const compScorecard=document.querySelector("#comp-score");
const win_msg=document.querySelector("#msg")
const choices = document.querySelectorAll(".choice");
const user=document.querySelector("#you");
const opp=document.querySelector("#comp");
const sel=document.querySelector("#option");
const gencompchoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const randidx=Math.floor(Math.random()*3);
    opp.innerText=`${options[randidx]}`;
    return options[randidx];
}
const playGmae=(userchoice)=>{
    const compChoice=gencompchoice();
     if(userchoice===compChoice) {draw();}
    else {
        let userwin=true;
    if(userchoice==="Rock"){ 
      userwin=compChoice=="Paper"?false:true;
      showWinner(userwin,compChoice);
    }
    else if(userchoice==="Paper"){
       userwin = compChoice === "Rock" ? true : false;
         showWinner(userwin,compChoice);
    }
    else{
        userwin=compChoice==="Rock"?false:true;
         showWinner(userwin,compChoice);
    }
    }
}
const draw=()=>{
    win_msg.innerText="Tie!";
    win_msg.style.backgroundColor="skyblue";
}
const showWinner = (userwin,compChoice) => {
    if (userwin) {
        win_msg.innerText = "YOU WIN!";
        win_msg.style.backgroundColor = "green";
        userScore++;
        userScorecard.innerText=userScore;
    } else {
        win_msg.innerText = "YOU LOSE!";
        win_msg.style.backgroundColor = "red";
        compScore++;
        compScorecard.innerText=compScore;
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
       user.innerText=`${userchoice}`;
       sel.innerText=`You select ${userchoice}`
        playGmae(userchoice);
    });
});