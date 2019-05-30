// Complete the getGrade(score) function in the editor.
// It has one parameter: an integer, score, denoting the number of points Julia earned on an exam.
// It must return the letter corresponding to her grade according to the following rules

function getGrade(score) {
    let grade;
    // Write your code here

    if (score > 25 && score <= 30) {
        grade = "A";
    }
    else if (score > 20) {
        grade = "B";
    }
    else if (score > 15) {
        grade = "C";
    }
    else if (score > 10) {
        grade = "D";
    }
    else if (score > 5) {
        grade = "E";
    }
    else {
        grade = "F";
    }
    
    return grade;
}
