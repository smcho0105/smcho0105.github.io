class Bar
{
    constructor()
    {
        this.x = random(300, width - 300);
        this.range = random(150, 300);
    }
    display()
    {
        fill(255, 0, 0, 100);
        rect(this.x, height - 100, this.range, 100);
    }
    reset()
    {
        this.x = random(300,  width - 300);
        this.range = random(150, 300);
    }
}