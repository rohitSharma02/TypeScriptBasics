var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var p1 = new Point(0, 1);
var p2 = new Point(10, 5);
var p3 = new Point(15, 20);
// console.log(p1);
// console.log("testing");
