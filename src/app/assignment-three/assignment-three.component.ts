import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent {

  Items : Array<number> = [1];

constructor(){
  this.addItemsDefault();
}

private addItemsDefault(): void {
  for (let i = 2; 3 > this.Items.length; i++) {
    this.Items.push(i);  
  }
}

}
