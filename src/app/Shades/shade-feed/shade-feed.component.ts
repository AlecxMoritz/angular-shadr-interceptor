import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shade-feed',
  templateUrl: './shade-feed.component.html',
  styleUrls: ['./shade-feed.component.css']
})
export class ShadeFeedComponent implements OnInit {
  @Input() shades: any[];
  constructor() { }

  ngOnInit() {
  }

}
