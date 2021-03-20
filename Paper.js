class Paper
{
    constructor(x,y)
    {
        var options = 
        {
            restitution: 0
        }

        this.x=x;
        this.y=y;
        this.image = loadImage("paper.png");
        this.paperWidth=200;
		this.paperHeight=213;
		this.paperThickness=20;
		
        this.paper=Bodies.rectangle(this.x, this.y, this.paperWidth, this.paperThickness, options)

        World.add(world, this.paper);
    }

    display()
    {
            var pospaper = this.paper.position

			push()
            translate(pospaper.x, pospaper.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255)
			rotate(this.angle)
            image(this.image, 0,0,this.paperWidth, this.paperHeight, this.paperThickness)
            pop()
    }
}