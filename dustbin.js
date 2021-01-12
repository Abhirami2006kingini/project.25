class Dustbin
{
    constructor(x,y,width,height)
    {
        var option={
           isStatic:true
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,option);
    World.add(world,this.body);
}
display()
{
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
}