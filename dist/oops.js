"use strict";
class Account {
    constructor(id, owner, _balance, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0)
            console.log("Not a valid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(balance) {
        if (balance < 0) {
            throw new Error("Not a valid Balance");
        }
        this._balance = balance;
    }
}
let account = new Account(1, 'Akash', 0, 'Golu');
account.deposit(2000);
console.log(account.balance);
console.log(account instanceof Account);
console.log(account.nickname);
class seatAllocation {
}
const seat = new seatAllocation();
seat.Akash = 1;
seat['Chicku'] = 2;
console.log(seat);
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
ride1.start();
console.log("Rides:", Ride.activeRides);
//# sourceMappingURL=oops.js.map