class BankAccount {
    private depositorName: string;
    private accountNumber: string;
    private accountType: string;
    private balance: number;

    constructor(depositorName: string, accountNumber: string, accountType: string, initialBalance: number) {
        this.depositorName = depositorName;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. Updated Balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. Updated Balance: ${this.balance}`);
        }
    }

    displayBalance(): void {
        console.log(`Name: ${this.depositorName}`);
        console.log(`Balance: ${this.balance}`);
    }
}


const account1: BankAccount = new BankAccount("Ravi", "1234567890", "Current", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.displayBalance();
