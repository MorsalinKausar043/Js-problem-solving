const leapYear = (years) => {
    if ((years % 4 == 0 && years & 4 != 0) || years % 400 == 0)
    {
        return true
    } else
    {
        return false
    }
};

const year = 2400;
const leapYears = leapYear(year);
console.log(leapYears);


