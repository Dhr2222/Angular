import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SideNavComponent } from "../side-nav/side-nav.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SideNavComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:any;
registerForm:any;
productForm:any;
activeForm: 'login' | 'register' |'productadd' = 'login';

constructor(private fb: FormBuilder,private router:Router,
  private snackBar:MatSnackBar){}

ngOnInit(){
  this.loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  });
  this.registerForm=this.fb.group({
     username:['',Validators.required],
     email:['',[Validators.required,Validators.email]],
     password:['',Validators.required]
  });
  this.productForm=this.fb.group({
    productname:['',[Validators.required]],
    productprice:['',[Validators.required]]
  });
}
toggleForm(form: 'login' | 'register'|'productadd'){
  this.activeForm = form;
}
login(){
  // if(this.loginForm.valid)
  const email=this.loginForm.get('email').value;
  const password=this.loginForm.get('password').value;
  console.log("Login info==>",this.loginForm.value);
  if(email==='abc@gmail.com' && password==='1111'){
   
    sessionStorage.setItem('Islogin','true');
    // this.router.navigate(['/budget-planner/dashboard'])
  }
  else{
    sessionStorage.setItem('Islogin','false');
    this.snackBar.open('Inavalid email or password!', 'Close',{duration:3000});
  }
}
register(){
  if(this.registerForm.valid){
    console.log("Register info==>",this.registerForm.value);
    setTimeout(()=>{
      window.location.reload();
    } ,2000);
    this.router.navigate(['/budget-planner/login'])
  }
  else{
    this.snackBar.open('Please fill in all fields correctly!', 'Close',{duration:3000});
  }
}
productadd(){
if(this.productForm.valid){
  console.log("Product Details==>",this.productForm.value);
  this.router.navigate(['/budget-planner/login'])
}
else{
  this.snackBar.open('Product not added', 'Close',{duration:3000});
}
}

}
