// abstract class Calendar{
//  constructor(public name:string){}
 
//  abstract addEvent():void;
//  abstract removeEvent():void;
// }

// Interface: it defines the shape of an object(doesnt include the implemenation details)
// Interface syntax are more concise
interface Calendar{
 name:string,
 addEvent():void,
 removeEvent():void,
}

interface CloudCalendar extends Calendar{
 sync():void
}

class GoogleCalendar implements CloudCalendar{
 constructor(public name:string){}
 sync(): void {
  throw new Error("Method not implemented.");
 }
 addEvent(): void {
  throw new Error("Method not implemented.");
 }
 removeEvent(): void {
  throw new Error("Method not implemented.");
 }
}