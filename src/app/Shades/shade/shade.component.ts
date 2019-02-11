import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shade',
  templateUrl: './shade.component.html',
  styleUrls: ['./shade.component.css']
})
export class ShadeComponent implements OnInit {
  @Input() shade: any;
  constructor() { }

  ngOnInit() {
  }

}
