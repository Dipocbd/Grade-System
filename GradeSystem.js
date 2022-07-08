//Calculates your score after inputing the score value
score = prompt("Enter your exam score")
let result={
    examscore:score ,
    remarks:null,
    grade:null,
    points:null
};

if(result.examscore<= 39)
{
    result.remarks = "poor";
    result.grade="F"
    result.points=0
    console.log(``)
}

else if(result.examscore<=44){
    result.remarks = "fair";
    result.grade="E"
    result.points=1
    console.log(``)

}

else if(result.examscore<=49){
    result.remarks = "Not Bad";
    result.grade="D"
    result.points=2
    console.log(``)

}

else if (result.examscore <=59){
    result.remarks = "Good";
    result.grade="C"
    result.points=3
    console.log(``)
}

else if(result.examscore <=69){
    result.remarks = "Excellent";
    result.grade="B"
    result.points=4
    console.log(``)
}

else if(result.examscore<=100){
    result.remarks = "Distinction";
    result.grade="A"
    result.points=5
    console.log(``)
}

else{
    console.log(`invalid score`);
}

console.log(`Your score is ${result.examscore}, Your Point is ${result.points} , Your Grade is ${result.grade} ,Your remark is ${result.remarks}`);

