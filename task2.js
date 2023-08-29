class circle{
    constructor(radius,color) {
        this.radius = Number(radius);
        this.color = String(color);
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius=Number(radius);
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = String(color);
    }
    toString() {
        return `circle[radius= ${this.radius},color= ${this.color}]`;
    }
    getArea() {
        return Number(3.14 * (this.radius ** 2));
    }
    getCircumference() {
        return Number(2* 3.14 *this.radius);
    }
}

let c = new circle(1.0, 'red');
