import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  personalInfoForm: FormGroup = new FormGroup({});

  get addressListform() {
    return this.personalInfoForm.get("addressList") as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm() {
    this.personalInfoForm = this.formBuilder.group({
      "firstName": ["", [Validators.required]],
      "lastName": ["", [Validators.required]],
      "email": ["", [Validators.required, Validators.email]],
      "addressList" : this.formBuilder.array([])
    });
    this.initiateAddressList();
  }

  initiateAddressList() {
    let initialAddressForm = this.formBuilder.group({
      streetAddress: ["", [Validators.required]],
      city: ["", [Validators.required]],
      state: ["", [Validators.required]],
      country: ["", [Validators.required]],
      mobile: ["", [Validators.required]],
    });
    this.addressListform.push(initialAddressForm);
    console.log(this.personalInfoForm);
  }

  addMoreAddress() {
    this.initiateAddressList();
  }

}
