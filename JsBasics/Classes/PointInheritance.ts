class PointInheritance extends Point {
    z: number;

    constructor(x:number, y:number, z:number){
        super(x,y);
        this.z = z;
    }

    add(point: PointInheritance) {
        let pointInheritance = super.add(point);
        return new PointInheritance(pointInheritance.x,pointInheritance.y, this.z + point.z);
    }
} 