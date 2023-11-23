var BankAccount = /** @class */ (function () {
    function BankAccount(depositorName, accountNumber, accountType, initialBalance) {
        this.depositorName = depositorName;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, ". Updated Balance: ").concat(this.balance));
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance.");
        }
        else {
            this.balance -= amount;
            console.log("Withdrawn ".concat(amount, ". Updated Balance: ").concat(this.balance));
        }
    };
    BankAccount.prototype.displayBalance = function () {
        console.log("Name: ".concat(this.depositorName));
        console.log("Balance: ".concat(this.balance));
    };
    return BankAccount;
}());
var account1 = new BankAccount("Ravi", "1234567890", "Current", 1000);
account1.deposit(500);
account1.withdraw(100);
account1.displayBalance();
