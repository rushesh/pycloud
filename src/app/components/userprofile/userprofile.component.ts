import { Component, OnInit, TemplateRef } from '@angular/core';
import { GlobalUser } from 'src/app/globaluser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MustMatch } from '../register/mustmatch';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,private user:GlobalUser,private formBuilder: FormBuilder) { }
  get_logged_in_user = this.user.getUserLoggedIn();
  login_user_status = this.get_logged_in_user!= null ? true : false;
  result =[ 
    {
      "title":"Mr",
        "firstname":"Rushesh",
        "lastname":"Rushesh",
        "emailid":"Rushesh",
        "password":"Rushesh",
        "username":"Rushesh"
        }
  ];
  ngOnInit() {
    if(this.get_logged_in_user!=null){
      this.login_user_status = true;
      
    }
    else{
      this.login_user_status = false;
    }
    this.registerForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    validator: MustMatch('password', 'confirmPassword')
  });
  }
  config = {
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true
  };
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,this.config);
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      else{
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      this.modalRef.hide();
      }
    }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
