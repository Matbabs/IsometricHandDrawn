export class Tile{

    private readonly HEIGHT = 40
    private readonly WIDTH = 80
    private _image:string
    private _x:number
    private _y:number
    private _offsetX:number
    private _offsetY:number
    
    constructor (image:string,idX:number,idY:number,offX:number, offY:number){
        this._offsetX = offX
        this._offsetY = offY
        this._image = image

        this._x = this.calculateX(idX,idY)
        this._y = this.calculateY(idX,idY)
    }

    calculateX(idX:number,idY:number){
        return (this.WIDTH/2*idX) - (this.WIDTH/2*idY) + this._offsetX
    }

    calculateY(idX:number,idY:number){
        return (this.HEIGHT/2*idY) + (this.HEIGHT/2*idX) + this._offsetY
    }

    get x(){return this._x}
    set x(k:number){this._x = k}

    get y(){return this._y}
    set y(k:number){this._y = k}

    get image(){return this._image}
    
}

 