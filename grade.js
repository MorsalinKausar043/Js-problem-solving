const Grade = (num) => {

    if (79 < num && num <= 100)
    {
        return "A+"

    }
    else if (69 < num && num < 80)
    {
        return "A"

    }
    else if (59 < num && num < 70)
    {
        return "A-"

    }
    else if (49 < num && num < 60)
    {
        return "B"
    }
    else if (39 < num && num < 50)
    {
        return "C"
    }
    else if (33 < num && num < 40)
    {
        return "D"
    }
    else if (1 < num && num < 33)
    {
        return "F"
    }
    else
    {
        return "invalid your number!"
    }
};

const GradeNum = 60;
const gradeFunction = Grade(GradeNum);
console.log("Your Grade is" , gradeFunction);