import { Component, OnInit } from '@angular/core';
import { ShadeService } from 'src/app/services/shade.service';

@Component({
  selector: 'app-shade-home',
  templateUrl: './shade-home.component.html',
  styleUrls: ['./shade-home.component.css']
})
export class ShadeHomeComponent implements OnInit {
  shades: any[];
  constructor(private shadeService: ShadeService) { }

  ngOnInit() {
    this.getShades();
  }

  onHandleRefresh() : void {
    this.getShades();
  }

  getShades() : void {
    this.shadeService.getShades().subscribe(data => {
      this.shades = data;
    })
  }

}
