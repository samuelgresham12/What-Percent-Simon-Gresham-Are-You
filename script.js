var score = 0;

start_Quiz()

function start_Quiz () {
}

function quiz1 () {
    name = document.getElementById("name").value;

    if(name){
        document.getElementById("question-area-1").style = 'display:none';
        document.getElementById("question-area-2").style = 'display:block';
    }
    else {
        document.getElementById("name").style = "border: 2px solid red;"
    }

}

function quiz2 (response) {

    switch (response) {
        case ("A"):
            score = score + 15;
            break;
        case ("B"):
            score = score + 15;
            break;
        case ("C"):
            score = score + 20;
            break;
        case ("D"):
            score = score + 5;
            break;
    }

    document.getElementById("question-area-2").style = 'display:none';
    document.getElementById("question-area-3").style = 'display:block';

}

function quiz3 (response) {

    switch (response) {
        case ("A"):
            score = score + 10;
            break;
        case ("B"):
            score = score + 15;
            break;
        case ("C"):
            score = score + 10;
            break;
        case ("D"):
            score = score + 20;
            break;
    }

    document.getElementById("question-area-3").style = 'display:none';
    document.getElementById("question-area-4").style = 'display:block';

}

function quiz4 (response) {

    switch (response) {
        case ("A"):
            score = score + 20;
            break;
        case ("B"):
            score = score + 20;
            break;
        case ("C"):
            score = score + 20;
            break;
        case ("D"):
            score = score + 20;
            break;
    }

    document.getElementById("question-area-4").style = 'display:none';
    document.getElementById("question-area-5").style = 'display:block';

}

function quiz5 (response) {

    switch (response) {
        case ("A"):
            score = score + 20;
            break;
        case ("B"):
            score = score + 0;
            break;
    }

    document.getElementById("question-area-5").style = 'display:none';
    document.getElementById("question-area-6").style = 'display:block';
}

function quiz6 (response) {

    switch (response) {
        case ("A"):
            score = score + 20;
            break;
        case ("B"):
            score = score + 20;
            break;
    }

    document.getElementById("question-area-6").style = 'display:none';
    loadResults()
    document.getElementById("results").style = 'display:block';
}

function loadResults () {
    document.getElementById("nameResults").innerHTML = name + ", you are...";
    document.getElementById("score").innerHTML = score;
}

