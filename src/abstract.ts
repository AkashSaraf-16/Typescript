// Abstract class are half baked classes hence there is no poin of instantiating them
// the other class extends it and use its declaration in it.

abstract class Shape{
 constructor(public color:string){}
 abstract render():void;
 draw():void{
  console.log("Drawing!!!")
 }
}
class Circle extends Shape{
 constructor(public radius:number,color:string){
  super(color)
 }
 override render(): void {
  console.log(`Rendering a circle of radius ${this.radius} and ${this.color} color.`)
 }
}

let c = new Circle(5,'yellow')
c.render()