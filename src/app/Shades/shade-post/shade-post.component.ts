import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ShadeService } from 'src/app/services/shade.service';

@Component({
  selector: 'app-shade-post',
  templateUrl: './shade-post.component.html',
  styleUrls: ['./shade-post.component.css']
})
export class ShadePostComponent implements OnInit {
  @ViewChild('shadeForm') shadeForm: ElementRef;
  constructor(private shadeService: ShadeService) { }
  @Output() shadePosted = new EventEmitter();
  ngOnInit() {
  }

  onPostShade(): void {
    let shade = {
      text : this.shadeForm.nativeElement.value
    }
    this.shadeService.postShade(shade).subscribe(data => {
      console.log(data);
      this.shadeForm.nativeElement.value = '';
      this.shadePosted.emit();
    })
  }
}