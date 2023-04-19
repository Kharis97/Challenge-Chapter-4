const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const rockCom = document.getElementById('rockCom');
const paperCom = document.getElementById('paperCom');
const scissorCom = document.getElementById('scissorCom');
const vs= document.getElementsByClassName('vs')[0];
const results= document.getElementById('results');
const refresh = document.getElementById('refresh');
let isClicked=false;

function mouseMovement(hand){
    let mouserEnter, mouseLeave, actionObj;
    mouserEnter = hand.addEventListener('mouseenter',function(){
        hand.style.background='lightblue';
        hand.style.borderRadius='15px';
    })
    mouseLeave =hand.addEventListener('mouseleave',function(){
        hand.style.background='none';
    })
    actionObj = mouserEnter+mouseLeave;
    return actionObj;
}

mouseMovement(rock);
mouseMovement(paper);
mouseMovement(scissor);

function getChoiceCom(){
    const com= Math.random();
    if(com<0.333){
        rockCom.style.backgroundColor='lightblue';
        rockCom.style.borderRadius='15px';
        return 'rock';
    }
    else if(com>=0.333 && com <0.666){
        paperCom.style.backgroundColor='lightblue';
        paperCom.style.borderRadius='15px';
        return 'paper';
    }
    else if(com>=0.666 && com <1){
        scissorCom.style.backgroundColor='lightblue';
        scissorCom.style.borderRadius='15px';
        return 'scissor';
    }
}

function getResults(player,com){
    function resultsShow(){
        vs.removeAttribute('class');
        vs.innerHTML='';
        results.style.removeProperty("visibility");
    }
    if(player==com){
        resultsShow();
        results.innerHTML="Draw";
        return 'Draw';
    }
    else if(player=='rock' && com=='paper'){
        resultsShow();
        results.innerHTML="COM<br>WIN";
        return 'Lose';
    }
    else if(player=='rock' && com=='scissor'){
        resultsShow();
        results.innerHTML="Player<br>Win";
        return 'Win';
    }
    else if(player=='paper' && com=='rock'){
        resultsShow();
        results.innerHTML="Player<br>Win";
        return 'Win';
    }
    else if(player=='paper' && com=='scissor'){
        resultsShow();
        results.innerHTML='COM<br>WIN';
        return 'Lose';
    }
    else if(player=='scissor' && com=='rock'){
        resultsShow();
        results.innerHTML="COM<br>WIN";
        return 'Lose';
    }
    else if(player=='scissor' && com=='paper'){
        resultsShow();
        results.innerHTML="Player<br>Win";
        return 'Win';
    }
}

rock.addEventListener('click',function(){
    if(!isClicked){
        isClicked=true;
        const choiceCom = getChoiceCom();
        const choicePlayer = rock.className;
        const results = getResults(choicePlayer, choiceCom);
        console.log(choicePlayer);
        console.log(choiceCom); 
        console.log(results);
    }
})

paper.addEventListener('click',function(){
    if(!isClicked){
        isClicked=true;
        paper.style.backgroundColor='lightblue';
        paper.style.borderRadius='15px';
        const choiceCom = getChoiceCom();
        const choicePlayer = paper.className;
        const results = getResults(choicePlayer, choiceCom);
        console.log(choicePlayer);
        console.log(choiceCom); 
        console.log(results);
    }
})

scissor.addEventListener('click',function(){
    if(!isClicked){
        isClicked=true;
        scissor.style.backgroundColor='lightblue';
        scissor.style.borderRadius='15px';
        const choiceCom = getChoiceCom();
        const choicePlayer = scissor.className;
        const results = getResults(choicePlayer, choiceCom);
        console.log(choicePlayer);
        console.log(choiceCom); 
        console.log(results);
    }
})

function reset(){
    refresh.addEventListener('click',function(){
        vs.setAttribute('class','vs');
        vs.innerHTML='VS';
        results.style.setProperty('visibility','hidden') 
        rockCom.style.background='none';
        paperCom.style.background='none';
        scissorCom.style.background='none';
        isClicked=false;
    })
}

reset();

