

function slotmachine(startquarters){
    var totaltries = 0;
    var randomnumber = Math.trunc(Math.random()*101);
    var mytry = Math.trunc(Math.random() * 101)
    var win = false;
    var msgWin = 'YOU LOST!';
    var attempts = 0;
    var quartersleft = startquarters;
    for (totaltries = 1; totaltries <= startquarters; totaltries++){
        if (matchedNumbers(mytry, randomnumber)){
            win = true;
            msgWin = "You WIN!";
            attempts = totaltries;
            quartersleft = (startquarters - totaltries) + 90;  // 40 is the amount they win
            break;
        }
        else{
            attempts = totaltries;
            quartersleft = startquarters - totaltries;
            mytry = Math.floor(Math.random()*101)
        }
        
    }
    console.log(msgWin + "--number of quarters left--" + quartersleft + "--started with--" + startquarters + "--number of attempts: " + attempts);
}


function matchedNumbers(mynumber, computernumber)
{
    var isMatched =false;
    if (mynumber === computernumber)
        {
            isMatched =true;
        }
    
    return isMatched;
}

function getnumber50()
{
    // this function needs to return a value between 50 and 100;
    var endnumber = Math.trunc(Math.random()*50)+51;
return endnumber;
}

slotmachine(getnumber50());