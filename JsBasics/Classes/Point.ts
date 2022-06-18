class Point{
    x: number;
    y: number;

    constructor(x:number, y:number) {
       this.x = x;
       this.y = y;
    }

    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }


}

let p1 = new Point(0,1);
let p2 = new Point(10, 5);
let p3 = new Point(15, 20);


// console.log(p1);
// console.log("testing");