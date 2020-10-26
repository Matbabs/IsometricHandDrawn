import { Tile } from './tile';
import { Images } from './images';

export class TileMap{

    readonly _IMAGE_WITDH = 382
    readonly _IMAGE_HEIGHT = 805
    private _NB_TILES = 100
    private _NB_TILES_BY_ROW = 10
    private _name:string
    private _tiles:Tile[] = []

    constructor(n?:number){
        if(n){
            this._NB_TILES_BY_ROW = n
            this._NB_TILES = Math.pow(n,2)
        }
        for(let i=0;i<this._NB_TILES;i++)
            this._tiles[i] = new Tile("ground_tile_porous1",this.calcX(i),this.calcY(i), window.innerWidth/2 - this._IMAGE_WITDH/2/2 , window.innerHeight/2 - (this._IMAGE_HEIGHT/2) - (40/2)*(this._NB_TILES_BY_ROW-4) )
    }

    transpose(){
        let _temp_tiles:Tile[] = []
        for(let i=0;i<this._NB_TILES;i++)
            _temp_tiles[i] = new Tile(this._tiles[i].image,this.calcX(i),this.calcY(i), window.innerWidth/2 - this._IMAGE_WITDH/2/2 , window.innerHeight/2 - (this._IMAGE_HEIGHT/2) - (40/2)*(this._NB_TILES_BY_ROW-4) )
        for(let i=this._NB_TILES-1;i>=0;i--)
            this._tiles[this._NB_TILES-i-1] = new Tile(_temp_tiles[i].image,this.calcX(this._NB_TILES-i-1),this.calcY(this._NB_TILES-i-1), window.innerWidth/2 - this._IMAGE_WITDH/2/2 , window.innerHeight/2 - (this._IMAGE_HEIGHT/2) - (40/2)*(this._NB_TILES_BY_ROW-4) )    
    }

    randomizeMap(){
        for(let i=0;i<this._NB_TILES;i++)
            this._tiles[i] = new Tile(this.getRandomImages(),this.calcX(i),this.calcY(i), window.innerWidth/2 - this._IMAGE_WITDH/2/2 , window.innerHeight/2 - (this._IMAGE_HEIGHT/2) - (40/2)*(this._NB_TILES_BY_ROW-4) )
    }

    calcX(i:number){return i%this._NB_TILES_BY_ROW}
    calcY(i:number){return Math.floor(i/this._NB_TILES_BY_ROW)}

    getRandomImages(): string{
        return Images[Math.floor(Math.random()*((Object.keys(Images).length/2)-1))];
    }

    get name(){return this._name}
    set name(x:string){this._name = x}

    get tiles(){return this._tiles}
    set tiles(x:Tile[]){this._tiles = x}
    
}