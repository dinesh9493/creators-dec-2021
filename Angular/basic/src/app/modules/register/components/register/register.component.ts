import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SharedService } from 'src/app/modules/shared/services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  isRegisterClicked: boolean = false;
  registrationComleted: boolean = false;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm() {
    this.registerForm = new FormGroup(
      {
        "firstName": new FormControl("", [Validators.required]),
        "lastName": new FormControl("", [Validators.required]),
        "email": new FormControl("", [Validators.required, Validators.email]),
        "mobile": new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      }
    );
  }

  register() {
    this.isRegisterClicked = true;
    if(this.registerForm.valid) {
      this.sharedService.setRegistrationValue(this.registerForm.value);
      this.registrationComleted = true;
      this.isRegisterClicked = false;
      this.registerForm.reset();
      setTimeout(() => {
        this.registrationComleted = false;
      }, 5000);
    }
  }

}
