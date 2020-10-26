import { Injectable } from '@angular/core';
import { TileMap } from '../models/tileMap';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private _tileMaps:TileMap[] = []

  constructor() {
    this.initMaps()
  }

  initMaps(n?:number){
    for(let i=0; i<2 ; i++)
      n ? this._tileMaps[i] = new TileMap(n) : this._tileMaps[i] = new TileMap()
    this._tileMaps[1].randomizeMap()
  }

  get tileMaps(){return this._tileMaps}

}
