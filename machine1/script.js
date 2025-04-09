//user getelement
let Ugenerator = document.getElementById('ugenerator');
let unumber = document.getElementById('unumber');

//bot getelement 
let botgenerator = document.getElementById('botgenerator');
let botnumber = document.getElementById('botnumber');

//compare getelemnt
let comparebutton = document.getElementById('compare')

//comparetext getelement
let comparetext = document.getElementById('comparetext')

 //lasttext getelemnt
let lasttext = document.getElementById('lasttext')

//resetbtn
let reset = document.getElementById('resetbtn')

//bot and user
var userrandomnumber;
var botrandomnumber

 
function userdisablebutton(){
    Ugenerator.disabled = true;
}

//button click sound
 var buttonclicksound = new Audio()
buttonclicksound.src = 'mixkit-hard-typewriter-click-1119.wav'

//user generator addeventlistener
Ugenerator.addEventListener('click', ()=> {
    buttonclicksound.play()
    userrandomnumber = Math.floor(Math.random()* 1000);
    console.log('your number : ' + userrandomnumber)
    unumber.textContent = 'Your Number Is : ' + userrandomnumber ;
    Ugenerator.style.color ='red';
    Ugenerator.style.backgroundColor = 'black';
    Ugenerator.style.cursor = 'default';
    Ugenerator.textContent = 'LOCKED!';
    Ugenerator.id = 'ugenerator2' ;
    userdisablebutton();
    botgenerator.textContent = 'Generate Number For Bot'
    botgenerator.style.backgroundColor = 'lightgrey'
})
 

function botdisablebutton(){
    botgenerator.disabled = true;
}


//bot generator addeventlistener 
botgenerator.addEventListener('click', ()=>{
    buttonclicksound.play()
    botrandomnumber = Math.floor(Math.random()* 1000);
    console.log('bot number : ' + botrandomnumber)
    botnumber.textContent = 'Bot Number Is : ???? ';
    botdisablebutton()
    botgenerator.style.color ='red';
    botgenerator.style.backgroundColor = 'black';
    botgenerator.style.cursor = 'default';
    botgenerator.textContent = 'LOCKED!';
    botgenerator.id = 'ugenerator2' ;

    comparebutton.style.backgroundColor = 'lightgrey'
    comparebutton.textContent = 'Compare Numbers'
})

//compare disable funtion
function comparedisable(){
    comparebutton.disabled = true
}


//comparebtn add
comparebutton.addEventListener('click', ()=>{
    buttonclicksound.play()
    comparedisable()
    comparebutton.style.backgroundColor = 'black'
    comparebutton.style.color = 'red'
    comparebutton.textContent = 'LOCKED!'
    comparebutton.id = 'compare2'
    reset.style.backgroundColor ='lightgrey'
    reset.style.cursor = 'pointer'
    reset.textContent = 'RESTART!'
    if(userrandomnumber > botrandomnumber){
        comparetext.textContent = 'You Won!'
        lasttext.innerHTML = 'BOT Number : ' + botrandomnumber;
    }else if(botrandomnumber > userrandomnumber){        
        comparetext.textContent = 'Bot Won!'
        comparetext.style.color = 'red'
        lasttext.innerHTML = 'BOT Number : ' + botrandomnumber;
    }
})

reset.addEventListener('click', ()=>{
    window.location = 'index.html'
    buttonclicksound.play()
})