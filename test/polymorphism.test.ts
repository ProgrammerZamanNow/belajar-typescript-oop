describe('Polymorphism', () => {

    class Employee {
        constructor(public name: string) {
        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        console.info(`Hello ${employee.name}`);
    }

    it('should support', () => {
        let employee: Employee = new Employee("Eko");
        console.info(employee);

        employee = new Manager("Eko");
        console.info(employee);

        employee = new VicePresident("Eko");
        console.info(employee);
    });

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee("Eko"));
        sayHello(new Manager("Budi"));
        sayHello(new VicePresident("Joko"));
    });
});
