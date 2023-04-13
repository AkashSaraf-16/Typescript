// Generic Class
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let obj1 = new KeyValuePair('key', 1);
let obj2 = new KeyValuePair(1, 'key');

// Generic Function
function wrapInArray<T>(val: T) {
  return [val];
}

let numbers = wrapInArray([1, 2]);
let number = wrapInArray(1);
let string = wrapInArray('a');

// Generic Methods
class ArrayUtils {
  wrapInArray<T>(val: T) {
    return [val];
  }
}

// Generic Interfaces

interface Result<T> {
  data: T | null;
  error: string | null;
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

function fetch<T>(url: string): Result<T> {
  if (url) return { data: null, error: null };
  return { data: null, error: null };
}

let resU = fetch<User>('url');
resU.data?.username;

let resP = fetch<Product>('url');
resP.data?.title;

// Generic Constraints

interface Person {
  name: string;
}

class Person1 {
  constructor(public name: string) {}
}

class SubPerson extends Person1 {}

function echo<T extends string | number | Person | Person1 | { name: string }>(
  value: T
): T {
  return value;
}

console.log(echo(1));
console.log(echo('Test'));
console.log(echo({ name: 'Akash' })); // Interface Person
console.log(echo(new Person1('Akash')));
console.log(echo(new SubPerson('Saraf'))); // even child class comes under the constraint

// Extending Generic Classes
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // Need to look this function one more section 6 lec 8
  findP(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}
// Three Scenarios of inheritance
// 1.Pass on generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}
// 2.Restricting the generic type parameter(applying constraint)
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}
// 3.Fix the generic typeparameter
class ProductStore extends Store<Product> {
  filterByProduct(category: string): Product[] {
    category = 'ok';
    return [];
  }
}
