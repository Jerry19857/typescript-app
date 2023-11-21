export class Animal {
    private breed: string = '';
    // constructor ไว้สำหรับ initialize ค่าเริ่มต้นให้กับ class
    constructor(bred: string) {
        this.breed = bred;
    }

    eat(): string {
        return `${this.breed} can eat`;
    }
}


// why we need to use protected (private)
class Transaction {
    private amount: number = 0;
    constructor(amount: number) {
        this.amount = amount;
    }
    getAmount(): number {
        return this.amount;
    }
    deposit(amount: number): void {
        this.amount += amount;
    }
    withdraw(amount: number): number {
        if(amount > this.amount) throw new Error('amount is not enough');
        this.amount -= amount;
        return amount;
    }
}

class Customer {
    firstName: string = '';
    lastName: string = '';
    fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

