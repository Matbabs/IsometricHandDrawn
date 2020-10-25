import { Injectable } from '@angular/core';
import {Tile} from '../models/tile';
import { TileMap } from '../models/tileMap';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private _tileMap:TileMap
  private _randomMap:TileMap

  constructor() {
    this._tileMap = new TileMap()
    this._randomMap = new TileMap()
    this._randomMap.randomizeMap()
  }

  resizeMaps(n:number){
    this._tileMap = new TileMap(n)
    this._randomMap = new TileMap(n)
    this._randomMap.randomizeMap()
  }

  get tileMap(){return this._tileMap}
  get tileMapRandom(){return this._randomMap}

}
