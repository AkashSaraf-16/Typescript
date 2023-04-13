"use strict";
let x = 20;
if (x < 100)
    x += 10;
console.log(x);
let arr = [1, 2];
let tuple = ['array', 10];
tuple.push(20);
function calculateTax(income, taxYear) {
    if (income < 100000 && (taxYear || 2020) < 2022)
        return income;
    return income * 0.7;
}
let employee = {
    id: 1,
    name: 'Akash',
    retire: (date) => {
        console.log(date);
    }
};
employee.retire(new Date("2022-03-25"));
function kgtoLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2;
}
console.log(kgtoLbs(10));
console.log(kgtoLbs('10kgs'));
let textBox = {
    drag: () => console.log("dragging"),
    resize: () => console.log("resizing")
};
let qty = 100;
//# sourceMappingURL=index.js.map