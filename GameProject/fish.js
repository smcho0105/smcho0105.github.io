class Fish
{
    constructor()
    {
        this.x;
        this.y;

        this.tx = random(0, 100);
        this.ty = random(0, 100);

        this.fish = int(random(0, 8));
    }
    display()
    {
        image(fishImage, this.x, this.y, 20, 20);

        this.x = width * noise(this.tx);
        this.y = height/5 + height/1.5 * noise(this.ty);

        this.tx += 0.005;
        this.ty += 0.005;
    }
    fishInformation()
    {
        image(seaFish[this.fish], width/2, height/2, 1000, 500);
    }
    reset()
    {
        this.fish = int(random(0, 8));
    }
}