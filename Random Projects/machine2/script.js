//chatgpt made copy button activator
document.querySelectorAll('#copy').forEach(button => {
    button.addEventListener('click', function() {
        const text = this.parentElement.textContent.replace("copy", "").replace("•", "").trim();
        navigator.clipboard.writeText(text);
    });
});

//connect
let input = document.getElementById('search');
let btn = document.getElementById('Enter');

//install
btn.addEventListener('click', ()=>{
    if(input.value == 'Fula Calypse - როგორ გავიდე'){
        let link = document.createElement('a')
        link.href = 'music/Fula-როგორ გავიდე.mp3'
        link.download = 'Fula-როგორ გავიდე'
        link.click()
    }else if(input.value == "IV დასი - PARADISE"){
        let link2 = document.createElement('a')
        link2.href = 'music/IV დასი - PARADISE.mp3'  
        link2.download = 'IV დასი - PARADISE'  
        link2.click()
    }else if(input.value == 'Sf-x - Overdose (Prod. Cibo)'){
        let link3 = document.createElement('a');
        link3.href = 'music/Sfx Overdose.mp3'
        link3.download ='Sf-x - Overdose (Prod. Cibo)'
        link3.click()
    }else if(input.value == 'Sf-x - Sasiamovno Iyo/სასიამოვნო იყო'){
        let link4 = document.createElement('a');
        link4.href = 'music/Sfx Iyo.mp3'
        link4.download ='Sf-x - Sasiamovno Iyo/სასიამოვნო იყო'
        link4.click()
    }else if(input.value == 'Sf-x - ეპილოგი / Epilogi'){
        let link5 = document.createElement('a');
        link5.href = 'music/Sfx Epilogi .mp3'
        link5.download ='Sf-x - ეპილოგი / Epilogi'
        link5.click()
    }else if(input.value == 'Sf-x - ისმის?!'){
        let link6 = document.createElement('a');
        link6.href = 'music/Sfx ისმის.mp3'
        link6.download ='Sf-x - ისმის?!'
        link6.click()
    }else if(input.value == 'Sf-x - როგორც ბოლო დღე'){
        let link7 = document.createElement('a');
        link7.href = 'music/Sfx როგორც ბოლო დღე.mp3'
        link7.download ='Sf-x - როგორც ბოლო დღე'
        link7.click()
    }else if(input.value == 'Sf-x - ლიბერალი "ზაზები"'){
        let link8 = document.createElement('a');
        link8.href = 'music/Sfx ზაზები.mp3'
        link8.download ='Sf-x - ლიბერალი "ზაზები"'
        link8.click()
    }else if(input.value == 'FuLA - ბოლო დროს'){
        let link9 = document.createElement('a');
        link9.href = 'music/FuLA - ბოლო დროს.mp3'
        link9.download ='FuLA - ბოლო დროს'
        link9.click()
    }
    else{
        console.log('zd')
    }
    
})
 