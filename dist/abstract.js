"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    draw() {
        console.log("Drawing!!!");
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log(`Rendering a circle of radius ${this.radius} and ${this.color} color.`);
    }
}
let c = new Circle(5, 'yellow');
c.render();
//# sourceMappingURL=abstract.js.map