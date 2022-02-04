import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  clickedItem: string = "";

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.clickedItem = this.sharedService.getClickedItem();
    console.log("Clicked Item while loading Component : ", this.sharedService.getClickedItem());
  }

  checkVarVariable() {
    this.clickedItem = "VAR is clicked";
    this.sharedService.setClickedItem(this.clickedItem);
  }

  checkLetVariable() {
    this.clickedItem = "LET is clicked";
    this.sharedService.setClickedItem(this.clickedItem);
  }

  checkConstVariable() {
    this.clickedItem = "CONST is clicked";
    this.sharedService.setClickedItem(this.clickedItem);
  }

}
