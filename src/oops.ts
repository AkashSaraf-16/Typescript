// class Account{
//  // Access modifiers: public,private and protected
//  readonly id:number;
//  owner:string;
//  private _balance:number;
//  nickname?:string
//  constructor(id:number,owner:string,balance:number,nickname?:string){
//   this.id=id,
//   this.owner=owner,
//   this._balance=balance,
//   this.nickname=nickname
//  }
//  deposit(amount:number):void{
//   if(amount<=0)
//    console.log("Not a valid amount")
//   this._balance+=amount
//  }
//  getBalance():number{
//   return this._balance
//  }
// }
// Better approach of above code
class Account{
 // Parameter properties
 constructor(public readonly id:number,
  public owner:string,
  private _balance:number,
  public nickname?:string,
  ){
 }
 deposit(amount:number):void{
  if(amount<=0)
   console.log("Not a valid amount")
  this._balance+=amount
 }
 get balance():number{
  return this._balance
 }
 set balance(balance:number){
  if(balance<0){
   throw new Error("Not a valid Balance")
  }
  this._balance=balance
 }
}

let account = new Account(1,'Akash',0,'Golu')
account.deposit(2000)
console.log(account.balance)
console.log(account instanceof Account);
console.log(account.nickname)

class seatAllocation{
 // Index Signatures: Gives us the flexibilty to add properties dynamically to obj 
 [benefeciaries:string]:number
}

const seat = new seatAllocation();
seat.Akash = 1;
seat['Chicku'] = 2;
console.log(seat)

class Ride{
 private static _activeRides:number=0;
 start(){
  Ride._activeRides++
 }
 stop(){
  Ride._activeRides--
 }
 static get activeRides(){
  return Ride._activeRides
 }
}

let ride1= new Ride();
ride1.start()
ride1.start()
console.log("Rides:",Ride.activeRides)

