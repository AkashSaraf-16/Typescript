"use strict";
var _a, _b;
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let obj1 = new KeyValuePair('key', 1);
let obj2 = new KeyValuePair(1, 'key');
function wrapInArray(val) {
    return [val];
}
let numbers = wrapInArray([1, 2]);
let number = wrapInArray(1);
let string = wrapInArray('a');
class ArrayUtils {
    wrapInArray(val) {
        return [val];
    }
}
function fetch(url) {
    if (url)
        return { data: null, error: null };
    return { data: null, error: null };
}
let resU = fetch('url');
(_a = resU.data) === null || _a === void 0 ? void 0 : _a.username;
let resP = fetch('url');
(_b = resP.data) === null || _b === void 0 ? void 0 : _b.title;
class Person1 {
    constructor(name) {
        this.name = name;
    }
}
class SubPerson extends Person1 {
}
function echo(value) {
    return value;
}
console.log(echo(1));
console.log(echo('Test'));
console.log(echo({ name: 'Akash' }));
console.log(echo(new Person1('Akash')));
console.log(echo(new SubPerson('Saraf')));
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    find(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
}
let compressibleStore = new CompressibleStore();
//# sourceMappingURL=generics.js.map