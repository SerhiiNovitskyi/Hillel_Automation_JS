class Human {
    constructor() {
        if (this.constructor == Human) {
            throw new Error('it is abstract class')
        } 
    }
    eat(){console.log('eating')}
    listen() { console.log('listening') }
}

class Worker extends Human {
    constructor(salary, workTime) {
        super(); // Викликаємо конструктор батьківського класу Human
        this.salary = salary;
        this.workTime = workTime;
    }

    greet() {
        console.log(`Hello! My salary is ${this.salary} and I work ${this.workTime} hours a day.`);
    }

    finishWork() {
        console.log('Work is finished.');
    }
}

// Приклад використання класу Worker
const worker = new Worker(2000, 8);
worker.greet(); // Виведе: Hello! My salary is 2000 and I work 8 hours a day.
worker.eat(); // Викликає метод eat з батьківського класу Human
worker.finishWork(); // Виведе: Work is finished.




// Additioal task





class WorkerTime extends Human {
    constructor(salary, workTime) {
        super();
        this.salary = salary;
        this.workTime = workTime;
    }

    greet() {
        console.log(`Hello! My salary is ${this.salary} and I work ${this.workTime} hours a day.`);
    }

    finishWork() {
        console.log('Work is finished.');
    }

    checkWorkStatus() {
        const currentTime = new Date();
        const workStartTime = new Date();
        workStartTime.setHours(9, 0, 0); // Робочий день починається о 09:00
        const workEndTime = new Date();
        workEndTime.setHours(18, 0, 0); // Робочий день закінчується о 18:00

        if (currentTime >= workStartTime && currentTime <= workEndTime) {
            console.log('I am currently working.');
        } else {
            console.log('I am currently not working.');
        }
    }
}

// Приклад використання класу Worker
const workertime = new WorkerTime(2000, 8);
workertime.checkWorkStatus(); // Виведе "I am currently not working." або "I am currently working." в залежності від години дня
