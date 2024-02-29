function createAccount(pin, amount) {
    let balance = amount;

    function checkBalance(enteredPin) {
        if (enteredPin !== pin) {
            return "Invalid PIN.";
        }
        return `Current balance: $${balance}.`;
    }

    function deposit(enteredPin, depositAmount) {
        if (enteredPin !== pin) {
            return "Invalid PIN.";
        }
        balance += depositAmount;
        return `Successfully deposited $${depositAmount}. Current balance: $${balance}.`;
    }

    function withdraw(enteredPin, withdrawAmount) {
        if (enteredPin !== pin) {
            return "Invalid PIN.";
        }
        if (withdrawAmount > balance) {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        balance -= withdrawAmount;
        return `Successfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
    }

    function changePin(oldPin, newPin) {
        if (oldPin !== pin) {
            return "Invalid PIN.";
        }
        pin = newPin;
        return "PIN successfully changed!";
    }

    return {
        checkBalance,
        deposit,
        withdraw,
        changePin
    };
}

module.exports = { createAccount };
