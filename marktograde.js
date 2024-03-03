/*
    @name: Assignement1
    @Course Code: SODV1201
    @Program: Software Development Diploma
    @Author: Anthony Half
*/

function myGrade() {
    var gscore; 
    var number = document.getElementById("mark").value;
    var score = parseInt(number);
    
    if(score >= 90 && score <= 100) {
        gscore = "Excellent! You got an A";
    } else if(score >= 80 && score <= 89) {
        gscore = "Great job! You got a B";
    } else if(score >= 70 && score <= 79) {
        gscore = "Well done! You got a C";
    } else if(score >= 50 && score <= 69) {
        gscore = "Alright! You got a D";
    } else if(score >= 0 && score <= 50) {
        gscore = "Fail! You got an F";
    } else {
        gscore = "Invalid score entered.";
    }

    document.getElementById("grades").innerHTML = gscore;       
}
