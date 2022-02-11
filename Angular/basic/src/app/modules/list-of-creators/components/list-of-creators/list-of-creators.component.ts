import { Component, OnInit } from '@angular/core';
import { RegisterModel } from 'src/app/modules/shared/models/register.model';
import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-list-of-creators',
  templateUrl: './list-of-creators.component.html',
  styleUrls: ['./list-of-creators.component.scss']
})
export class ListOfCreatorsComponent implements OnInit {

  listOfCreators: RegisterModel[] = [];

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.listOfCreators = this.sharedService.getRegisteredList();
  }

}
