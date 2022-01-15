class Link{
    constructor(bodyA, bodyB,){
    
var lastlink = rope.body.bodies.length - 2
this.link = Constraint.create({
  bodyA: bodyA.body.bodies[lastlink],
  bodyB: bodyB,
  length: -20,
  stiffness:0.01

})

World.add(world,this.link)
    }
}