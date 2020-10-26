import { Component, Input, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() size:number = 10

  constructor(public mapService:MapService) { }

  ngOnInit(): void {
  }

  resizeMap(){
    this.size <= 0 ? this.size = 1 : this.size
    this.size > 30 ? this.size = 30 : this.size
    this.mapService.initMaps(this.size)
  }

  transpose(){
    this.mapService.tileMaps[1].transpose()
  }

}
