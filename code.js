var questions = [ //Questions for Quiz Page
                'What is the planet called we are travelling to?', //0
                'How manyship options are there?', //1
                'What creatures have taken over Earth?', //2
                'How long do we have to leave Earth?', //3
                'If zombies appear on X0-0516 what do you do?', //4
                'How many tonnes of food is each ship bringing to X0-0516?' //5
                 ];

var options = [ //Options for the Questions
            [
             'X0-0514', //0
             'X0-0516', //1
             'X1-22' //2
            ], //[0][0-2]
            [
             '12', //0
             '14', //1
             '9' //2
            ], //[1][0-2]
            [
             'Zombies', //0
             'dinosaurs', //1
             'giants' //2
            ], //[2][0-2]
            [
             '3 days', //0
             '3 weeks', //1
             '3 months' //2
            ], //[3][0-2]
            [
             'Shoot them with your ship', //0
             'Stay in ship', //1
             'Get out and fight them' //2
            ], //[4][0-2]
            [
             '50 tonnes', //0
             '200 tonnes', //1
             '100 tonnes' //2
            ] //[5][0-2]
              ];

var randQ = 0;//Lets me use randQ in other functions

function loadQuestion() {//Randomises what question is shown on quiz page.
     randQ = Math.floor(Math.random() * questions.length);
    document.getElementById('question').innerHTML = questions[randQ];

    for (var i = 0; i < 3; i++) {//Matches the options with the question.
        document.getElementById('otext' + i).innerHTML = options[randQ][i];
    }
}


function check() {//Checks if the answer is correct

    for (var i = 0; i < 3; i++) {
        if (document.getElementById('option' + i).checked) {
            var answer = document.getElementById('option' + i).value;
        }

    }
    if (randQ == 0) {
        if (answer == 1) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }


if (randQ == 1) {
        if (answer == 0) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }


if (randQ == 2) {
        if (answer == 2) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }


if (randQ == 3) {
        if (answer == 0) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }
   
    if (randQ == 4) {
        if (answer == 1) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }
   
    if (randQ == 5) {
        if (answer == 0) {
            document.getElementById('result').innerHTML = 'Correct!';
            document.getElementById('result').style.color = 'green';
        } else {
            document.getElementById('result').innerHTML = 'Dead';
            document.getElementById('result').style.color = 'red';
        }
    }
   
    setTimeout(//resets the page after 3 seconds to ask the user another question.
        function(){window.location.href='quiz.html';}
        ,2500);
}

window.onload = function () {// Loads the question on quiz page.
    loadQuestion();

}