pleyawan = document.getElementById("ako");
compshop = document.getElementById("computer");
win = document.getElementById("res");
bots = document.querySelectorAll(".bots");
ps = document.getElementById('Pscor');
cs = document.getElementById('Cscor');
np = 0;
nc = 0;
// document.getElementById('history').style.display = 'none';
h = document.getElementById('history');
g = document.getElementById('score');
i = document.getElementById('compscore');
j = document.getElementById('playscore');
h.style.display = 'none';
g.style.display = 'none';
i.style.display = 'none';
j.style.display = 'none';
pleyawan.style.display = 'none';
compshop.style.display = 'none';
win.style.display = 'none';


bots.forEach(button => button.addEventListener("click", () => {

    h.style.display = 'block';
    g.style.display = 'block';
    i.style.display = 'block';
    j.style.display = 'block';
    pleyawan.style.display = 'block';
    compshop.style.display = 'block';
    win.style.display = 'block';
    playR1 = button.id;
    // next();
    brandy = Math.floor(Math.random() * 3) + 1;

    switch(brandy){
      case 1:
        comp = "Rock";
        break;
      case 2:
        comp = "Paper";
        break;
      case 3:
        comp = "Scissors";
        break;
    }
    pleyawan.innerHTML = `Player: ` + playR1;
    compshop.innerHTML = 'Computer: ' + comp;
    win.innerHTML = chiK();
    // his.innerHTML = hist();
    his = document.getElementById("disp");
    Mhistory = document.createElement('h3');
    Mhistory.textContent = hist();
    his.appendChild(Mhistory);
    
    if (his.childElementCount > 5){
      his.removeChild(his.firstElementChild);
    }
    if (winner == true){
      np = np + 1;
      ps.innerHTML = np;
      Mhistory.style.color = 'cyan';
      win.style.color = 'cyan';
    } 
    if (winner == false){
      nc = nc + 1;
      cs.innerHTML = nc;
      Mhistory.style.color = '#EB4747';
      win.style.color = '#EB4747';
    }
    if (winner == null){
      Mhistory.style.color = 'yellow';
      win.style.color = 'yellow';
    }
}));


function chiK(){
    if(playR1 == comp){
      winner = null;
      return "It's a Tie !";
    }

    if (comp == "Rock" && playR1 == "Paper"){
      winner = true; 
      return "You Win !";
    } else if(comp == "Paper" && playR1 == "Scissors"){
      winner = true;
      return "You Win !";
    } else if(comp == "Scissors" && playR1 == "Rock"){
      winner = true;
      return "You Win !";
    } 

    if (playR1 == "Rock" && comp == "Paper") {
      winner = false;
      return "You Lose !";
    } else if (playR1 == "Paper" && comp == "Scissors") {
      winner = false;
      return "You Lose !";
    } else if (playR1 == "Scissors" && comp == "Rock") {
      winner = false;
      return "You Lose !";
    }
}

function hist(){
  if(playR1 == "Rock" && comp == "Rock"){
    return "Player: Rock " + " " + "Computer: Rock";
  } else if(playR1 == "Rock" && comp == "Paper"){
    return "Player: Rock " + " " + "Computer: Paper";
  } else if(playR1 == "Rock" && comp == "Scissors"){
    return "Player: Rock " + " " + "Computer: Scissors";
  } else if(playR1 == "Scissors" && comp == "Scissors"){
    return "Player: Scissors " + " " + "Computer: Scissors";
  } else if(playR1 == "Scissors" && comp == "Paper"){
    return "Player: Scissors " + " "+ "Computer: Paper";
  } else if(playR1 == "Scissors" && comp == "Rock"){   
    return "Player: Scissors " + " "+ "Computer: Rock";
  } else if(playR1 == "Paper" && comp == "Paper"){
    return "Player: Paper " + " "+ "Computer: Paper";
  } else if(playR1 == "Paper" && comp == "Rock"){
    return "Player: Paper " + " "+ "Computer: Rock";
  } else if(playR1 == "Paper" && comp == "Scissors"){   
    return "Player: Paper " + " "+ "Computer: Scissors";
  } 

  
}




