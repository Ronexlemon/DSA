class GenericClass<Type>{
    Age :Type
    Salary:Type
    constructor(age:Type, salary:Type){
        this.Age = age;
        this.Salary =salary;
    }
    getAge():Type{
        return this.Age;
    }
    getSalary():Type{
        return this.Salary;
        }

}

const genClass = new GenericClass<number>(10,15)
 console.log(genClass.getAge())
console.log(genClass.getSalary())
