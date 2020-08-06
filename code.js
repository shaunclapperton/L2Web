var questions = [
    'How do you distract a zombie',
    'How do you kill a zombie',
    'How do you hide form a zombie'
];

var options = [
    ['bust', 'run', 'die'],
    ['bust', 'run', 'die'],
    ['bust', 'run', 'die']
    
];
var randQ = 0;


function loadQuestion(){
    var randQ = Math.floor(Math.random()*questions.length);
    document.getElementById('question').innerHTML = questions[randQ];
    
    for(var i=0;i<3;i++){
        document.getElementById('oText' + i).innerHTML = options[randQ][i];
    }
}



function check(){
    
    for(var i=0;i<3;i++){
             if(document.getElementById('option'+i).checked){
                var answer = document.getElementById('option'+i).value;  
        }
    }
        
       
    if(randQ == 0){
        if(answer == 1){
            document.getElementById('result').innerHTML =  'correct';
            document.getElementById('result').style.color =  'green';
            
        }else{
            document.getElementById('result').innerHTML =  'dead';
            document.getElementById('result').style.color =  'red';
        }
    }

if(randQ == 1){
        if(answer == 1){
            document.getElementById('result').innerHTML =  'correct';
            document.getElementById('result').style.color =  'green';
        }else{
            document.getElementById('result').innerHTML =  'dead';
            document.getElementById('result').style.color =  'red';
        }
    }

if(randQ == 2){
        if(answer == 1){
            document.getElementById('result').innerHTML =  'correct';
            document.getElementById('result').style.color =  'green';
        }else{
            document.getElementById('result').innerHTML =  'dead';
            document.getElementById('result').style.color =  'red';
        }
    }
}

setTimeout(function(){window.location.href='contact.html';},3000);


window.onload = function() {
    loadQuestion();
}


