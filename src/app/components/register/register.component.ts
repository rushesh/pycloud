import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../register/mustmatch';
import { first } from 'rxjs/operators';
// import { user } from '../../models/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private Auth: AuthService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
          lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
          email: ['', [Validators.required, Validators.email]],
          username: ['', [Validators.required, Validators.pattern('[._]*[a-zA-Z0-9]+[._]*'),Validators.minLength(6)]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required,, Validators.minLength(6)],
          acceptTerms: [false, Validators.requiredTrue]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
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
        let user_det = new Object ({
          title:this.registerForm.value.title,
            firstname : this.registerForm.value.firstName,
            lastname: this.registerForm.value.lastName,
            username: this.registerForm.value.username,
            emailid:this.registerForm.value.email,
            password:this.registerForm.value.password
        });
            
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      this.Auth.registerUser(user_det).pipe(first()).subscribe(
          (data :Response) => {
            if(data.status){
                alert('SUCCESS!! :-)\n\n')
            }
            else{
                alert('Failure!! :-)\n\n');
            }
          },
          error => {
            alert('Failure!! Error:-)\n\n');
        });
      }
    }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
