import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credenciais } from 'src/app/models/credenciais';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private toast: ToastrService) {

  }

  creds: Credenciais = {
    email: '',
    senha: '',
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  validaCampos(): boolean {
    if (this.email.valid && this.senha.value) {
      return true;
    } else {
      return false;
    }
  }

  logar() {
    this.toast.error('Usuário inválido', 'Login');
  }


}
