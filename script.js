// TASK1
function Worker(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = function(){
        let salary = this.rate * this.days;
        return salary
    }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.name); 
console.log(worker.surname); 
console.log(worker.rate); 
console.log(worker.days); 
console.log(worker.getSalary()); 

// TASK2
function Calculator(a, b) {
    this.read = function () {
        this.a = +prompt("Введите первое число")
        this.b = +prompt("Введите первое число")
    }

    this.sum = function () {
        return `Сумма ваших чисел ${this.a + this.b}`
    }

    this.mul = function () {
        return `Произведение ваших чисел ${this.a * this.b}`
    }
}

let calculator = new Calculator();
calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())