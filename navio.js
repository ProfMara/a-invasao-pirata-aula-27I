class Barco{
    constructor(x,y){
        this.imagem = loadImage("barco.png")
        this.body = Bodies.circle(x,y,70, {isStatic:false})
        World.add(world, this.body)
        
    }
    destruir(n){
        //comando que adiciona um delay (intervalo de tempo)
        setTimeout(()=>{
            World.remove(world, barcos[n].body);
            //tira da matriz
            delete barcos[n]            
        }, 1500)

        

    }

    show(){
        var pos = this.body.position;
        image (this.imagem, pos.x, pos.y, 140,140)
    }
}