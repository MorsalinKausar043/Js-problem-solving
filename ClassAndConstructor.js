class students{
    constructor(name, age, cls,hobby) {
        this.name = name;
        this.age = age;
        this.cls = cls;
        this.myHobby = hobby;
    };
    
    getData() {
        let { name, age, cls , myHobby } = this;
        return `My Name is ${name} . I'm ${age} years . I read in ${cls}. My hobby is ${myHobby}.`;
    }
};

class engineer extends students{
    constructor(name, age, cls, hobby, futurePlan) {
        super(name, age, cls, hobby);
        this.futurePlan = futurePlan;
    };
    getNewData() {
        const { futurePlan } = this;
        return `${super.getData()} and My future plan is ${futurePlan}!`;
    }
}

const student = new engineer("Morsalin", 20, "diploma" , "Programming","Software Engineering").getNewData();
console.log(student);

// Ans : My Name is Morsalin . I'm 20 years . I read in diploma. My hobby is Programming. and My future plan is Software Engineering!
