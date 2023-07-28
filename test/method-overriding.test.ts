describe('Method Overriding', () => {

    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void{
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {

        sayHello(name: string): void {
            super.sayHello(name);
            console.info(`And, I am your manager`);
        }
    }


    it('should support', () => {
        const employee = new Employee("Eko");
        employee.sayHello("Budi");

        const manager = new Manager("Eko");
        manager.sayHello("Budi");
    });
});
