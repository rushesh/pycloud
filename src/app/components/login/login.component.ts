import { Component, OnInit } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { GlobalUser } from 'src/app/globaluser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private Auth:AuthService, private user: GlobalUser) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      }, {
          
      });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
else{   
      // display form values on success
      let user_det = new Object ({
        emailid : this.registerForm.value.email,
        password:this.registerForm.value.password
    });
    const login_emailid =  this.registerForm.value.email;
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
      this.Auth.logincheck(user_det).pipe().subscribe(
        (data :Response) => {
            // console.log('Data Status '+data.);
          if(data.status){
              alert('SUCCESS!! :-)\n\n');
              this.user.setUserLoggedInEmail(login_emailid);
          }
          else if(data.statusText=='User not found'){
            alert('Failure!! :-)\n\n User Not Found');
          }
          else{
              alert('Failure!! :-)\n\n Wrong password');
          }
        },
        error => {
            alert('Failure!! Error:-)\n\n');
            console.log(error);
      });
    this.Auth.logincheck(user_det);
    }
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
