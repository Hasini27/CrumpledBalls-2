class Launcher{
    constructor(bodyA,pointB){
       
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness:0.01,
            length :10
            }
        
        this.pointB=pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
 fly()
 {
     this.launcher.bodyA=null;
 }

    display(){
       if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("red");
        line(pointA.x, pointA.y, pointB.x,pointB.y);
       }
    
} 
}



